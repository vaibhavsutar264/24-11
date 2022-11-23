import React from 'react'
import { render, screen } from '@testing-library/react'
import SetPassword from '../components/login/set-password/SetPassword'
import { Provider } from 'react-redux'
import { store, persistor } from '../redux/store'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

test('Then it shuold show the user text on input box', () => {
  const expectTextPassword = 'Vaibhav@1234'
  const expectTextConfirmPassword = 'Vaibhav@1234'

  render(
    <BrowserRouter>
      <Provider store={store}>
        <SetPassword />
      </Provider>
    </BrowserRouter>
  )
  const passwordElement = screen.getByTestId('password-element')
  const confirmPasswordElement = screen.getByTestId('confirm-password-element')
  expect(passwordElement).toBeInTheDocument()

  userEvent.type(passwordElement, 'Vaibhav@1234')
  userEvent.type(confirmPasswordElement, 'Vaibhav@1234')

  expect(passwordElement).toHaveAttribute('value', expectTextPassword)
  expect(confirmPasswordElement).toHaveAttribute('value', expectTextConfirmPassword)
})

const typeIntoForm = ({
    password,
    confirmPassword,
}: {
    password: string
    confirmPassword: string
}) => {
  const passwordElement = screen.getByTestId('password-element')
  const confirmPasswordElement = screen.getByTestId('confirm-password-element')
  if (password) {
    userEvent.type(passwordElement, password)
  }
  if (confirmPassword) {
    userEvent.type(confirmPasswordElement, confirmPassword)
  }

  return {
    passwordElement,
    confirmPasswordElement,
  }
}

describe('App', () => {
  beforeEach(() => {
    render(
        <BrowserRouter>
        <Provider store={store}>
          <SetPassword />
        </Provider>
      </BrowserRouter>
    )
  })

  test('inputs should exist', () => {
    const passwordElement = screen.getByTestId('password-element') as HTMLInputElement
    const confirmPasswordElement = screen.getByTestId(
      'confirm-password-element'
    ) as HTMLInputElement
    expect(passwordElement).toBeInTheDocument()
    expect(confirmPasswordElement).toBeInTheDocument()
  })

  test('inputs should be initially empty', () => {
    const passwordElement = screen.getByTestId('password-element') as HTMLInputElement
    const confirmPasswordElement = screen.getByTestId(
      'confirm-password-element'
    ) as HTMLInputElement
    expect(passwordElement.value).toBe('')
    expect(confirmPasswordElement.value).toBe('')
  })

  test('should be able to type an email', () => {
    const passwordElement = screen.getByTestId('password-element') as HTMLInputElement
    typeIntoForm({ password: 'Vaibhav@1234', confirmPassword: '123' })
    expect(passwordElement.value).toBe('Vaibhav@1234')
  })

  test('should be able to type a password but with wrong combination so that button will not get enabled', () => {
    const confirmPasswordElement = screen.getByTestId(
      'confirm-password-element'
    ) as HTMLInputElement
    const buttonElement = screen.getByRole('button', { name: /Done/i })
    typeIntoForm({ password: '', confirmPassword: 'vai' })
    expect(confirmPasswordElement.value).toBe('vai')
    expect(buttonElement).toBeDisabled()
  })

  test('should be able to type a password with right combination so that button will get enabled', () => {
    const confirmPasswordElement = screen.getByTestId(
      'confirm-password-element'
    ) as HTMLInputElement
    const buttonElement = screen.getByRole('button', { name: /Done/i })
    typeIntoForm({ password: '', confirmPassword: 'Vaibhav@1234' })
    expect(confirmPasswordElement.value).toBe('Vaibhav@1234')
    expect(buttonElement).toBeEnabled()
  })

  test('Then it have both values', async () => {
    const confirmPasswordElement = screen.getByTestId(
      'confirm-password-element'
    ) as HTMLInputElement
    const passwordElement = screen.getByTestId('password-element') as HTMLInputElement
    typeIntoForm({ password: 'Vaibhav@123', confirmPassword: 'Vaibhav@1234' })
    expect(passwordElement.value).toBe('Vaibhav@123')
    expect(confirmPasswordElement.value).toBe('Vaibhav@1234')
    const NavigateToSetpasswordScreen = screen.getByRole('button', {
      name: /Done/i,
    })
    const errorafterwrongcredentials =
      'Password and Confirm Password must match'
    userEvent.click(NavigateToSetpasswordScreen)
    expect(errorafterwrongcredentials).toBeTruthy()
  })
})
