function Modal(props) {
    let iframeHeight = 630;
    let iframeWidth = 840;
    if(props.visibility==="hidden"){
        iframeHeight = 0;
        iframeWidth = 0;
    }
    return (
        <div>
            <iframe title="Ninja Rap" width={iframeWidth} height={iframeHeight} style={{visibility: `${props.visibility}`}}
                src="https://youtu.be/R_K6971WmAs?t=27">
            </iframe>
        </div>
    );
}

export default Modal;