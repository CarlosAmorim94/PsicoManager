import { createSlice } from "@reduxjs/toolkit"

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    modalData: {
      name: "",
      cpf: "",
      mobilePhone: "",
      zipcode: "",
      street: "",
      number: "",
      state: "",
      city: "",
      bankCode: "",
      bankAccountAgency: "",
      bankAccountNumber: "",
      bankAccountType: "checking",
      typePerson: "physical person",
    },
    isOpen: false,
    steep: "userData",
  },
  reducers: {
    addInfo: (state, action) => {
      return { ...state, ...action.payload }
    },
    toggleModal: (state) => {
      return { ...state, isOpen: !state.isOpen }
    },
    goToPayment: (state) => {
      return { ...state, steep: "payment" }
    },
    goToMessages: (state) => {
      return { ...state, steep: "messages" }
    },
  },
})

export const modalReducer = modalSlice.reducer
export const { addInfo, toggleModal, goToMessages, goToPayment } =
  modalSlice.actions
