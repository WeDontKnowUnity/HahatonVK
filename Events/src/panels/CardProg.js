import React from 'react';
import PropTypes from 'prop-types';
import bridge from '@vkontakte/vk-bridge';

import { VKWebAppShare } from '@vkontakte/vk-bridge';

import { Panel, PanelHeader, Avatar, Cell, Div, TabsItem, FormItem, Badge, Tabs, Button, Group, Card, CardGrid, ContentCard, Tabbar, TabbarItem, Epic, Separator, ButtonGroup, Text, Title } from '@vkontakte/vkui';
import { Icon20LocationOutline, Icon24ArrowLeftOutline, Icon24PlaceOutline, Icon20ShareOutline, Icon28UserCircleOutline, Icon28NewsfeedOutline } from '@vkontakte/icons';
import b from '../img/b.png';
import d from '../img/d.webp';

function VKShare() {
	bridge.send('VKWebAppShare', {
		link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
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



const CardProg = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader before={<Icon24ArrowLeftOutline />} onClick={go} data-to="recommended">Мероприятие</PanelHeader>
		{fetchedUser &&
		<Group>
				<CardGrid size="l">
				<Card mode="shadow">
				</Card>
					<ContentCard
						src={b}
						subtitle="Развлечения"
						header="Киновечер"
						caption = "19 марта 2023, 19:00"
						maxHeight={300}
						/>
				</CardGrid>

			<FormItem>
				<ButtonGroup mode="vertical" gap="m" stretched>
					<Button onClick={VKShare} size="s" appearance="accent" mode="tertiary" style={{alignSelf:"start"}} before={< Icon20ShareOutline />}>
						Поделиться
					</Button>
				</ButtonGroup>
			</FormItem>

			<FormItem>
				<Text style={{fontSize:"16px", marginLeft:"4%"}} >Вечер кино и попкорна. Будем смотреть Гарри Поттера. Приносите свои вкусняшки, будем рады всем!</Text>

				<Button size="m" appearance="neutral" mode="tertiary" disabled={true} before={<Icon24PlaceOutline />}>
					ул. Гагарина 1
				</Button>
			</FormItem>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<ButtonGroup mode="vertical" gap="m" stretched>
				<Button size="l" appearance="negative" style={{alignSelf:"center"}}>
				Мест нет
				</Button>
			</ButtonGroup>
			<br/>
				
		</Group>}
		<br/>
		<br/>

	</Panel>
);

CardProg.propTypes = {
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

export default CardProg;
