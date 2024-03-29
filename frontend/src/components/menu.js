import React from 'react';
import {Motion, spring} from 'react-motion';

// CONSTANTS
// Value of 1 degree in radians
const DEG_TO_RAD = 0.0174533;


// UTILITY FUNCTIONS
function toRadians(degrees) {
    return degrees * DEG_TO_RAD;
}

// -------------------------------------------------------
// ---------------   COMPONENT START   -------------------
// -------------------------------------------------------
class MenuButton extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: this.props.isOpen
        };
    }

    toggleMenu() {
        let {isOpen} = this.state;
        this.setState({
            isOpen: !isOpen
        });
    }

    getMainButtonStyle() {
        let {mainButtonDiam} = this.props;
        return {
            width: mainButtonDiam,
            height: mainButtonDiam
        }
    }

    getInitalChildButtonStyle() {
        let {childButtonDiam, mainButtonDiam, stiffness, damping} = this.props;
        return {
            width: childButtonDiam,
            height: childButtonDiam,
            zIndex: -1,
            top: spring(mainButtonDiam / 2 - childButtonDiam / 2, {stiffness, damping}),
            left: spring(mainButtonDiam / 2 - childButtonDiam / 2, {stiffness, damping})
        }
    }

    getFinalChildButtonStyle(index) {
        let {childButtonDiam, mainButtonDiam, stiffness, damping} = this.props;
        let {deltaX, deltaY} = this.getFinalDeltaPositions(index);
        return {
            width: childButtonDiam,
            height: childButtonDiam,
            zIndex: spring(0),
            top: spring(mainButtonDiam / 2 + deltaX, {stiffness, damping}),
            left: spring(mainButtonDiam / 2 - deltaY, {stiffness, damping})
        }
    }

    getFinalDeltaPositions(index) {
        let NUM_CHILDREN = this.props.elements.length;
        let CHILD_BUTTON_DIAM = this.props.childButtonDiam;
        let FLY_OUT_RADIUS = this.props.flyOutRadius;
        let SEPARATION_ANGLE = this.props.seperationAngle;
        let ROTATION = this.props.rotation;
        let FAN_ANGLE = (NUM_CHILDREN - 1) * SEPARATION_ANGLE;
        let BASE_ANGLE = ((180 - FAN_ANGLE) / 2) + 90 + ROTATION;

        let TARGET_ANGLE = BASE_ANGLE + (index * SEPARATION_ANGLE);
        return {
            deltaX: FLY_OUT_RADIUS * Math.cos(toRadians(TARGET_ANGLE)) - (CHILD_BUTTON_DIAM / 2),
            deltaY: FLY_OUT_RADIUS * Math.sin(toRadians(TARGET_ANGLE)) + (CHILD_BUTTON_DIAM / 2)
        };
    }

    getCProps() {
        return {
            mainButtonProps: () => ({
                className: "button-menu",
                style: this.getMainButtonStyle(),
                onClick: this.toggleMenu.bind(this)
            }),
            childButtonProps: (style, onClick) => ({
                className: "button-child",
                style,
                onClick: () => {
                    this.setState({isOpen: false}, onClick);
                }
            }),
            childButtonMotionProps: (index, isOpen) => ({
                key: index,
                style: isOpen ? this.getFinalChildButtonStyle.call(this, index)
                    : this.getInitalChildButtonStyle.call(this)
            }),
            // handle Icons
            childButtonIconProps: (name) => ({
                className: "child-button-icon fa fa-" + name + " fa-" + this.props.childButtonIconSize
            }),
            mainButtonIconProps: (name) => ({
                className: "main-button-icon fa fa-" + name + " fa-" + this.props.mainButtonIconSize
            })
        }
    }

    renderChildButton(item, index) {
        let {isOpen} = this.state;
        let cp = this.getCProps();

        return <Motion {...cp.childButtonMotionProps(index, isOpen)}>
            {
                (style) =>
                    <div {...cp.childButtonProps(style, item.onClick)}>
                        {item.icon}
                        {/*<i {...cp.childButtonIconProps(item.icon)}/>*/}
                    </div>
            }
        </Motion>;
    }

    render() {
        let cp = this.getCProps();
        let {elements, mainButtonIcon} = this.props;

        return <div className="button-container">
            {elements.map((item, i) => this.renderChildButton(item, i))}
            <div {...cp.mainButtonProps()}>
                {mainButtonIcon}
                {/*<i {...cp.mainButtonIconProps(mainButtonIcon)}/>*/}
            </div>
        </div>;
    }
}

// -------------------------------------------------------
// ----------------   COMPONENT END   --------------------
// -------------------------------------------------------


// APP
class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            flyOutRadius: 120,
            seperationAngle: 30,
            mainButtonDiam: 52,
            childButtonDiam: 48,
            numElements: 5,
            stiffness: 320,
            damping: 24,
            rotation: 0,
            mainButtonIcon: this.props.mainButtonIcon,
            mainButtonIconSize: "2x",
            childButtonIconSize: "lg"
        }
    }

    render() {
        return <MenuButton {...this.state} isOpen={this.props.menuOpen}
                           elements={this.props.buttons.slice(0, this.state.numElements)}/>;
    }
}

export default Menu;