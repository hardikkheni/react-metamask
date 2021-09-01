import { fork } from 'redux-saga/effects';
import { metaMaskSaga } from './metamask.watcher';

export default function* rootSaga() {
	yield fork(metaMaskSaga);
}
