import * as React from 'react';
import {useState} from 'react';
import styles from './Quiz.module.css';

export default function Quiz({quizData,}) {
    const [answers, setAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (id, value) => {
        setAnswers({
            ...answers,
            [id]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className={styles.mainDiv}>
            <form onSubmit={handleSubmit}>
                {quizData.map((q) => (
                    <div key={q.id} className=
                        {!submitted ? styles.block :
                            answers[q.id] === q.solution ? styles.correctBlock : styles.incorrectBlock
                        }>
                        <div className={styles.statementDiv}>
                            <p>{q.statement}</p>
                        </div>
                        <div className={styles.answers}>
                            <label>
                                <input
                                    type="radio"
                                    name={` statement-${q.id}`}
                                    value="true"
                                    checked={answers[q.id] === true}
                                    onChange={() => handleChange(q.id, true)}
                                />
                                True
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name={` statement-${q.id}`}
                                    value="false"
                                    checked={answers[q.id] === false}
                                    onChange={() => handleChange(q.id, false)}
                                />
                                False
                            </label>
                        </div>
                    </div>
                ))}
                <button type="submit" className={styles.button}>Submit</button>
                <p className={styles.feedback}>{submitted && quizData.map(
                    (q) => answers[q.id] === q.solution).filter(x => x).length + " out of " + quizData.length + " correct"}
                </p>

            </form>
        </div>
    );
};

