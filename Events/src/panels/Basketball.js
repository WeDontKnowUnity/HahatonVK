import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Avatar, Cell, Div, TabsItem, Badge, Tabs, Button, Group, Card, CardGrid, ContentCard, Tabbar, TabbarItem, Epic, Separator, ButtonGroup, Text, Title } from '@vkontakte/vkui';
import { Icon20LocationOutline, Icon24ArrowLeftOutline, Icon20ShareOutline, Icon28UserCircleOutline, Icon28NewsfeedOutline } from '@vkontakte/icons';
import b from '../img/basket.jpg';
import d from '../img/d.webp';

const Basketball = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader before={<Icon24ArrowLeftOutline />} onClick={go} data-to="recent">Мероприятие</PanelHeader>
		{fetchedUser &&
		<Group>
				<CardGrid size="l">
				<Card mode="shadow">
				</Card>
					<ContentCard
						src={b}
						subtitle="Спорт"
						header="Игра в баскетбол"
						caption = "20 марта 2023, 19:00"
						/>
				</CardGrid>
			<Div>
				<Text style={{fontSize:"12px", marginLeft:"4%"}} >Приглашаем посмотреть на игру в баскетбол между командами ДГТУ и ЮФУ</Text>
			</Div>
			<Separator></Separator>
			<Div>
				<Text style={{fontSize:"12px", marginLeft:"4%"}}>Место: Манеж ДГТУ</Text>
			</Div>
			<br/>
			<Icon20ShareOutline style={{marginLeft:"5%"}}/>
			<br/>
			<br/>
			<br/>
			<Div>
				<Title level="1" style={{fontSize:"16px", marginLeft:"4%", textAlign:"center", color:"#FFA000"}}>осталось мало мест</Title>
			</Div>
			<ButtonGroup mode="horizontal" gap="m" stretched>
				<Button size="l" appearance="accent" style={{marginLeft:"20%", marginRight:"20%"}} stretched>
				Записаться
				</Button>
			</ButtonGroup>
			<br/>
				
		</Group>}
		<br/>
		<br/>

	</Panel>
);

Basketball.propTypes = {
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

export default Basketball;
