// Base Template https://bootstraptema.ru/stuff/templates_bootstrap/portfolio/evernet/8-1-0-4611

import React, { useEffect } from 'react'
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom'

// redux
import { compose, createStore } from 'redux';
import { rootReducer } from './redux/rootReducer';
import { Provider } from 'react-redux';
// component
import { ContentAuth } from './PageContent/ContentAuth';
import { ContentIndex } from './PageContent/ContentIndex/ContentIndex';
import { ContentPersonal } from './PageContent/ContentPersonal';
import HeaderMenu from './components/HeaderMenu/HeaderMenu';
import { PageContainer } from './HOC/PageContainer/PageContainer';
import { ContentTypeScript } from './PageContent/ContentTypeScript/ContentTypeScript.tsx';
import { APP_MODEL } from './Model/AppModel';
import { checkRespForSuccess } from './Libs/Common';
import Popap from './components/Popap/Popap';
import { Header } from './components/Header/Header.tsx';


// style
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.less'
import { setMainMenu } from './redux/SettingsReducer/actions';



const APP_STORE = createStore(rootReducer, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

export const App = () => {
    // Получить меню
    useEffect(() => {
        // Получить настройки
        APP_MODEL.getMenu().then(r => {
            if (checkRespForSuccess(r)) {
                APP_STORE.dispatch(setMainMenu(r.data))
            }
        })
    }, [])


    return (
        <Provider store={APP_STORE} >
            <BrowserRouter >
                <Header />
                <Switch >
                    <Route exact path='/'
                        component={ContentIndex}
                    />
                    <PageContainer arrayClass={[]} >

                        <Route path='/auth/'
                            component={ContentAuth}
                        />
                        <Route path='/personal/'
                            component={ContentPersonal}
                        />
                        <Route path='/type-script/'
                            component={<ContentTypeScript />}
                        />
                    </PageContainer>
                </Switch>
            </BrowserRouter>
            <Popap />
        </Provider>
    )
}

ReactDOM.render(<React.StrictMode >

    <App />

</React.StrictMode>,
    document.getElementById('app')
);