import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonIcon, IonItem, IonButton } from '@ionic/react';
import { heart } from 'ionicons/icons';
import { useHistory } from 'react-router';
import './Home.css';

const Home: React.FC = () => {

  let history = useHistory();

  return (
    <IonPage className='su-page'>
      <IonHeader>
        <IonToolbar>
          <IonTitle>SIGN UP FORM (1 - CLIENT)</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color='lighterblue' fullscreen>
        <div className='su-label'>
          <h2 className='su-heading'>SIGN UP</h2>
          Start by filling in your credentials
        </div>

        <IonItem className='su-input su-home-input su-item-input-bg-color'>
          <IonIcon slot='start' icon={heart} /><IonInput placeholder='Username' ></IonInput>
        </IonItem>
        <IonItem className='su-input su-item-input-bg-color'>
          <IonIcon slot='start' icon={heart} /><IonInput placeholder='Email Address' ></IonInput>
        </IonItem>
        <IonItem className='su-input su-item-input-bg-color'>
          <IonIcon slot='start' icon={heart} /><IonInput placeholder='Addiction Type' ></IonInput>
        </IonItem>
        <IonItem className='su-input su-item-input-bg-color'>
          <IonIcon slot='start' icon={heart} /><IonInput placeholder='Profile Picture' ></IonInput>
        </IonItem>

        <IonButton onClick={() => {history.push('./Home2')}} className='su-btn-1-2' color='neonblue' size='default' shape='round' expand='block'>NEXT</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
