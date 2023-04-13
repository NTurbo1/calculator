export function Button({id, className, buttonText, buttonType, setOutput, setFormula, 
                    buttonsDisabled, setButtonDisabled}) {

    function handleDigitClick() {

        const prevOutputText = document.getElementById('ouput-screen').firstChild.textContent
        const prevFormulaText = document.getElementById('formula-screen').firstChild.textContent

        if (prevOutputText === "0" || isNaN(prevOutputText)) {
            setOutput(buttonText)
        } else if (prevOutputText.length === 16) {
            setOutput("DIGIT LIMIT MET")
            setButtonDisabled(true)
            setTimeout(() => {
                setOutput(prevOutputText)
                setButtonDisabled(false)
            }, 1000)
        } else {
            setOutput(state => state + buttonText)
        }

        if (prevFormulaText.includes("=")) {
            setOutput(buttonText)
            setFormula(buttonText)
        } else if (prevFormulaText === "0" || prevFormulaText === "=NaN") {
            setFormula(buttonText)
        } else if (prevFormulaText === "" || prevFormulaText.length > 0) {
            setFormula(state => state + buttonText)
        }
    }

    function handleACClick() {
        setOutput('0')
        setFormula('')
    }

    function handleEqualityClick() {
        const prevOutputText = document.getElementById('ouput-screen').firstChild.textContent
        const prevFormulaText = document.getElementById('formula-screen').firstChild.textContent
        
        if (!prevFormulaText.includes("=")) {
            if (prevFormulaText === "") {
                setOutput("NaN")
                setFormula("=NaN")
            } else if (isNaN(prevFormulaText.slice(-1))) {
                const formulaExpression = prevFormulaText.slice(0, -1)
                const result = eval(formulaExpression)
                if (!prevFormulaText.includes("=")) {
                    setFormula(formulaExpression + "=" + result)
                    setOutput(result)
                }
            } else {
                const result = eval(prevFormulaText)
                setFormula(prevFormulaText + "=" + result)
                setOutput(result)
            } 
        }
    }

    function handleOperatorClick() {
        const prevOutputText = document.getElementById('ouput-screen').firstChild.textContent
        const prevFormulaText = document.getElementById('formula-screen').firstChild.textContent

        setOutput(buttonText)

        if (prevFormulaText.includes("=")) {
            const prevResult = prevFormulaText.slice(prevFormulaText.indexOf("=") + 1)
            setFormula(prevResult + buttonText)
        } else if (!isNaN(prevFormulaText.slice(-1))) {

            if (prevFormulaText === "") {
                setFormula("0" + buttonText)
            } else {
                setFormula(prevFormulaText + buttonText)
            }
        } else {
            setFormula(prevFormulaText.slice(0, -1) + buttonText)
        }
    }

    const  handleClick = (() => {
        if (buttonType === "digit") {
            return handleDigitClick
        } else if (buttonType === "eraser") {
            return handleACClick
        } else if (buttonType === "equality") {
            return handleEqualityClick
        } else if (buttonType === "point") {

        }

        return () => {
            handleOperatorClick()
        }
    })()

    return (
        <div className={className} id = {id && id} onClick={!buttonsDisabled ? handleClick : null}>
            <span className="button-text">{buttonText}</span>
        </div>
    )
}