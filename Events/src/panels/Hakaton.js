import React from 'react';
import PropTypes from 'prop-types';
import bridge from '@vkontakte/vk-bridge';

import { VKWebAppShare } from '@vkontakte/vk-bridge';

import { Panel, PanelHeader, Avatar, Cell, Div, TabsItem, Badge, Tabs, Button, Group, Card, CardGrid, ContentCard, Tabbar, TabbarItem, Epic, Separator, ButtonGroup, Text, Title } from '@vkontakte/vkui';
import { Icon20LocationOutline, Icon24ArrowLeftOutline, Icon20ShareOutline, Icon28UserCircleOutline, Icon28NewsfeedOutline } from '@vkontakte/icons';
import b from '../img/Hackaton.jpg';
import d from '../img/d.webp';

function VKShare() {
	bridge.send('VKWebAppShare', {
		link: 'https://vk.com/vkappsdev'
		})
		.then((data) => { 
		  if (data.result) {
			// Запись размещена
		  }
		})
		.catch((error) => {
		  // Ошибка
		  console.log(error);
		});
  }

const Hakaton = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader before={<Icon24ArrowLeftOutline />} onClick={go} data-to="recent">Мероприятие</PanelHeader>
		{fetchedUser &&
		<Group>
				<CardGrid size="l">
				<Card mode="shadow">
				</Card>
					<ContentCard
						src={b}
						subtitle="Соревнования"
						header="Соревнования по разработке"
						caption = "20 марта 2023, 19:00"
						/>
				</CardGrid>
			<Div>
				<Text style={{fontSize:"12px", marginLeft:"4%"}} >Разработайте свое приложение за 48 часов, соревнуясь с другими командами</Text>
			</Div>
			<Separator></Separator>
			<Div>
				<Text style={{fontSize:"12px", marginLeft:"4%"}}>Место: Гараж ДГТУ</Text>
			</Div>
			<br/>
			<Button onClick={VKShare} size="l" appearance="accent" style={{marginLeft:"5%"}} before={< Icon20ShareOutline />}>
			</Button>
			<br/>
			<br/>
			<br/>
			<br/>
			<ButtonGroup mode="horizontal" gap="m" stretched>
				<Button size="l" appearance="negative" style={{marginLeft:"20%", marginRight:"20%"}} stretched>
				Мест нет
				</Button>
			</ButtonGroup>
			<br/>
		</Group>}
		<br/>
		<br/>

	</Panel>
);

Hakaton.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Hakaton;
