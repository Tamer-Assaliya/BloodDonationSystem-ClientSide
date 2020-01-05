import subjectList from './__mockList';

const fields = [
    [
        {
            name: "firstName",
            label: "First Name",
            type: "text",
            inputProps: {
                autoCorrect: false
            }
        },
        {
            name: "lastName",
            label: "Last Name",
            type: "text",
            inputProps: {
                autoCorrect: false
            }
        }
    ],
    [
        {
            name: 'email',
            label: 'Email',
            type: 'email',
            fieldProps: {
                autoCorrect: false,
                autoCapitalize: 'none',
                keyboardType: 'email-address'
            }
        },


    ],
    [
        {
            name: "subject",
            placeholder: "Pick a topic of your interest",
            pickerItems: [
                {
                    label: "React Native",
                    value: 0
                },
                {
                    label: "React Hooks",
                    value: 1
                },
                {
                    label: "React Navigation",
                    value: 2
                },
                {
                    label: "React News",
                    value: 3
                }
            ],
            type: "picker"
        }
    ],
    [
        {
            name: "password",
            label: "Password",
            type: "text",
            inputProps: {
                secureTextEntry: true
            }
        }
    ],
    [
        {
            name: "subscribe",
            label: "Subscribe me to weekly news from Tech world.",
            type: "boolean",
            defaultValue: true
        }
    ],
    [
        {
            name: "signUpButton",
            label: "Sign Up",
            type: "button"
        }
    ],
    [
        {
            name: "resetButton",
            label: "Reset",
            type: "button"
        }
    ]
];

export default fields;