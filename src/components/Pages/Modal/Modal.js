import classNames from 'classnames/bind';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import styles from './Modal.module.scss';
import BackGround from '@/assets/Image/efffcecb709c4ac7cf5e536694f2ea99.jpg';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'redirect',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    ],
};

function Modal() {
    return (
        <div className={cx('wrapper')} style={{ backgroundImage: `url(${BackGround})` }}>
            <div className={cx('modal-container')}>
                <div style={{ textAlign: 'center' }}>
                    <h1>Tiki App </h1>
                    <p>Bạn Hãy đăng nhập tài khoản của bạn</p>
                </div>
                <div>
                    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Link
                        to="/"
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '220px',
                            height: '40px',
                            backgroundColor: '#fff',
                            color: '#000',
                            textAlign: 'center',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                        }}
                    >
                        Bạn muốn quay lại ?
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Modal;
