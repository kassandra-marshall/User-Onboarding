import React from "react";

const Form = (props) => {
    const {change, submit} = props;
    const { username, email, password, terms} = props.values;

    const onChange = (e) => {
        const { name, value, checked, type } = e.target;
        const newVal = type === 'checkbox' ? checked : value;
        change(name, newVal);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        submit();
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>Name:
                    <input 
                        name="username"
                        type="text"
                        value={username}
                        onChange={onChange}
                    />
                </label>
                <label>Email:
                    <input 
                        name="email"
                        type="email"
                        value={email}
                        onChange={onChange}
                    />
                </label>
                <label>Password
                    <input 
                        name="password"
                        type="password"
                        value={password}
                        onChange={onChange}
                    />
                </label>
                <label>Terms of Service
                    <input 
                        name="terms"
                        type="checkbox"
                        checked={terms}
                        onChange={onChange}
                    />
                    <input type="submit" value="Create a Friend!" />
                </label>
            </form>
        </div>
    )
}

export default Form