export default function Color({ nombreColor, codigoColor }) {
    const cambiarColor = (codigo) => {
        let bodyStyle = document.body.style;
        bodyStyle.backgroundColor = codigo;
    }

    return <div
        className="color"
        onClick={() => cambiarColor(codigoColor)}
        style={{ background: codigoColor }}
    ></div>
}