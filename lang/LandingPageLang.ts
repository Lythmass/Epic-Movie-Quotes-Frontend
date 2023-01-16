import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

i18next.use(initReactI18next).init({
  fallbackLng: 'en',
  resources: {
    en: {
      translation: {
        header: 'Find any quote in millions of movie lines',
        title: 'MOVIE QUOTES',
        footer: 'MOVIE QUOTES. ALL RIGHTS RESERVED.',
        buttons: {
          'get-started': 'Get started',
          'sign-up': 'Sign up',
          'log-in': 'Log in',
        },
        movies: {
          interstellar: {
            quote: 'You have to leave something behind to go forward',
            title: 'Interstellar, 2014',
          },
          tenenbaums: {
            quote:
              'I think we’re just gonna have to be secretly in love with each other and leave it that',
            title: 'The Royal Tenenbaums, 2001',
          },
          tlotr: {
            quote:
              'I see in your eyes the same fear that would take the heart of me...',
            title: 'The Lord of the Rings, 2003',
          },
        },
        registrationModal: {
          title: 'Create an account',
          message: 'Start your journey!',
          name: 'Name',
          email: 'Email',
          password: 'Password',
          password_confirmation: 'Confirm password',
          'name-placeholder': 'Enter your name',
          'email-placeholder': 'Enter your email',
          google: 'Sign up with Google',
          question: 'Already have an account?',
          'get-started': 'Get started',
        },
        loginModal: {
          title: 'Log in to your account',
          message: 'Welcome back! Please enter your details.',
          google: 'Sign in with Google',
          question: 'Missing an account?',
          'sign-in': 'Sign in',
        },
        validation: {
          required: 'Please fill out the field.',
          'min-name': 'Please enter at least 3 characters.',
          max: 'Please do not enter more than 15 characters.',
          pattern: 'Please enter only lowercase letters and numbers.',
          'valid-email': 'Please enter a valid email format.',
          'min-pass': 'Please enter at least 8 characters.',
          'pass-confirm': "Entered password doesn't match.",
          'email-taken': 'The email has already been taken.',
          'name-taken': 'Name has already been taken.',
        },
      },
    },
    ka: {
      translation: {
        header: 'იპოვეთ სასურველი ციტატა მილიონობით ფილმიდან',
        title: 'ფილმთა ციტატები',
        footer: 'ფილმთა ციტატები. ყველა უფლება დაცულია.',
        buttons: {
          'get-started': 'ჩაერთეთ',
          'sign-up': 'რეგისტრაცია',
          'log-in': 'შესვლა',
        },
        movies: {
          interstellar: {
            quote: 'წინსვლისთვის რაღაცების გაწირვაა საჭირო',
            title: 'ინტერსტელარი, 2014',
          },
          tenenbaums: {
            quote: 'მგონი მოგვიწევს, რომ ჩვენ საიდუმლოდ დავრჩეთ შეყვარებულები',
            title: 'ტენენბაუმების ოჯახი, 2001',
          },
          tlotr: {
            quote: 'შენს თვალებში ვხედავ შიშს, რომელიც ჩემს გულს წაიღებს...',
            title: 'ბეჭდების მბრძანებელი, 2003',
          },
        },
        registrationModal: {
          title: 'შექმენით ანგარიში',
          message: 'დაიწყეთ მოგზაურობა!',
          name: 'სახელი',
          email: 'ელ-ფოსტა',
          password: 'პაროლი',
          password_confirmation: 'გაიმეორეთ პაროლი',
          'name-placeholder': 'შეიყვანეთ თქვენი სახელი',
          'email-placeholder': 'შეიყვანეთ თქვენი ელ-ფოსტა',
          google: 'დარეგისტრირდით გუგლით',
          question: 'გაქვთ უკვე ანგარიში?',
          'get-started': 'დარეგისტრირდით',
        },
        loginModal: {
          title: 'შედით თქვენს ანგარიშზე',
          message: 'გამარჯობა, გთხოვთ შეიყვანოთ თქვენი დეტალები.',
          google: 'შესვლა გუგლით',
          question: 'არ გაქვთ ანგარიში გახსნილი?',
          'sign-in': 'შესვლა',
        },
        validation: {
          required: 'გთხოვთ შეავსეთ ველი.',
          'min-name': 'გთხოვთ მინიმუმ 3 სიმბოლო შეიყვანეთ.',
          max: 'გთხოვთ 15 სიმბოლოზე მეტი არ შეიყვანოთ.',
          pattern:
            'გთხოვთ მხოლოდ დაბალი რეგისტრის ასოები და ციფრები შეიყვანეთ.',
          'valid-email': 'გთხოვთ სწორი ელ-ფოსტის ფორმატი შეიყვანეთ.',
          'min-pass': 'გთხოვთ მინიმუმ 8 სიმბოლო შეიყვანეთ.',
          'pass-confirm': 'შეყვანილი პაროლები არ ემთხვევა ერთმანეთს.',
          'email-taken': 'ელ-ფოსტა უკვე გამოყენებულია.',
          'name-taken': 'სახელი უკვე გამოყენებულია.',
        },
      },
    },
  },
});
