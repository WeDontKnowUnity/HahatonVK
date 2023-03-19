<meta
  name="viewport"
  content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
/>

import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import LK from './panels/LK';
import LK2 from './panels/LK2';
import LKorg from './panels/LKorg';
import CardProg from './panels/CardProg';

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	// const go_role = role_s => {
    //     console.log(role_s.role);
    //     if (role_s.role == 'Организатор') {
    //         go(ROUTES.STUD);
    //     } else if (role_s.role == 'Студент') {
    //         go(ROUTES.PRED);
       

	return (
		<ConfigProvider>
			<AdaptivityProvider>
				<AppRoot>
					<SplitLayout popout={popout}>
						<SplitCol>
							<View activePanel={activePanel}>
								<Home id='home' fetchedUser={fetchedUser} go={go} />
								<LK id='lk' fetchedUser={fetchedUser} go={go} />
								<LK2 id='lk2' fetchedUser={fetchedUser} go={go} />
								<LKorg id='lkorg' fetchedUser={fetchedUser} go={go} />
								<CardProg id='cardprog' fetchedUser={fetchedUser} go={go} />
							</View>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;
