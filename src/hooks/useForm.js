import { useState } from "react"

export const useForm = (initalState = {}) => {
  
  const [stateForm, setStateForm] = useState(initalState);

  const handleChange = ({ target: { name, value } }) => {
    setStateForm({
      ...stateForm,
      [name]: value
    })
  }

  return {
    ...stateForm,
    setStateForm,
    handleChange
  }
}
