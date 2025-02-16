import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import "./bootstrap.min.css"; // подключаем bootstrap.min.css

// Компонент Form, в котором будем работать с рефами
class Form extends Component {
    // Временно закомментированные рефы, которые можно было бы использовать
    // myRef = React.createRef();
    // mySecondRef = React.createRef();

    // Компонентный метод, который будет вызван после того, как компонент был смонтирован
    // componentDidMount() {
    //     this.myRef.current.focus();  // Это фокусирует на элементе, к которому привязан реф.
    // }

    // Метод для установки рефа с помощью функции
    setInputRef = (elem) => {
        // Присваиваем переданный элемент в myRef
        this.myRef = elem; // Этот элемент будет рефом, то есть ссылка на DOM элемент input
    };

    // Метод для фокусировки на первом input
    focusFirstTI = () => {
        if (this.myRef) {
            // Если myRef существует (элемент DOM уже присоединен),
            // фокусируемся на нем
            this.myRef.focus(); // Фокусируемся на input, к которому привязан реф
        }
    };

    // Рендерим форму с полями ввода и textarea
    render() {
        return (
            <Container>
                <form className="w-50 border mt-5 p-3 m-auto">
                    <div className="mb-3">
                        <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                        >
                            Email address
                        </label>
                        {/* Это поле ввода использует функцию для рефа */}
                        <input
                            ref={this.setInputRef} // Функция setInputRef будет вызываться и передаст в myRef элемент input
                            type="email"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="name@example.com"
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="exampleFormControlTextarea1"
                            className="form-label"
                        >
                            Example textarea
                        </label>
                        <textarea
                            onClick={this.focusFirstTI} // При клике на textarea, вызываем функцию, которая фокусирует input
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                        ></textarea>
                    </div>
                </form>
            </Container>
        );
    }
}

// Функция для рендеринга компонента App, который включает в себя Form
function App() {
    return <Form />; // Включаем компонент Form в App
}

export default App;
