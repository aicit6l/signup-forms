import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonIcon, IonItem, IonButton, IonCheckbox, IonLabel } from '@ionic/react';
import { eye } from 'ionicons/icons';
import './Home.css';

const Home2: React.FC = () => {
    return (
        <IonPage className='su-page'>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>SIGN UP FORM (2 - CLIENT)</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent color='lighterblue' fullscreen>
                <div className='su-label'>
                    <h2 className='su-heading'>SIGN UP</h2>
                    Create your password
                </div>

                <IonItem className='su-input su-home2-input su-item-input-bg-color'>
                    <IonInput placeholder='Password'  ></IonInput><IonIcon slot='end' icon={eye} />
                </IonItem>
                <IonItem className='su-input su-item-input-bg-color'>
                    <IonInput placeholder='Repeat Password' ></IonInput><IonIcon slot='end' icon={eye} />
                </IonItem>

                <IonItem className='su-checkbox su-item-checkbox-bg-color'>
                    <IonCheckbox slot='start' />
                    <IonLabel>I accept the T's and C's</IonLabel>
                </IonItem>

                <IonButton className='su-btn-1-2' color='neonblue' size='default' shape='round' expand='block'>CREATE ACCOUNT</IonButton>

            </IonContent>
        </IonPage>
    );
};

export default Home2;