import {takeLatest, put, call} from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';

function* loginSaga(action) {
  try {
    const {email, password} = action.payload;

    const storedUserData = yield call(AsyncStorage.getItem, 'user');
    const parsedUserData = JSON.parse(storedUserData);
    console.log(storedUserData, parsedUserData);
    if (
      parsedUserData &&
      parsedUserData.email === email &&
      parsedUserData.password === password
    ) {
      yield put({type: 'LOGIN_SUCCESS', payload: parsedUserData});
    } else {
      yield put({type: 'LOGIN_FAILURE', error: 'Invalid username or password'});
    }
  } catch (error) {
    yield put({type: 'LOGIN_FAILURE', error: 'An error occurred'});
  }
}

function* registerSaga(action) {
  const {username, email, password} = action.payload
  const user = {username, email, password};

  yield put({type: 'REGISTER_SUCCESS', payload: user});
}

function* logoutSaga() {
  yield put({type: 'LOGOUT_SUCCESS'});
}

export default function* authSaga() {
  yield takeLatest('LOGIN', loginSaga);
  yield takeLatest('REGISTER', registerSaga);
  yield takeLatest('LOGOUT', logoutSaga);
}
