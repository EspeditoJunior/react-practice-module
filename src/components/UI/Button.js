import style from './Buttons.module.css';

function Button(props) {
    return (
        <button 
            className={style.button} 
            type={props.type || 'button'} 
            onClick={props.onClick}>
            {props.children}
        </button>
    )
};

export default Button;