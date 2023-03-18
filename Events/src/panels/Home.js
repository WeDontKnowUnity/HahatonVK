import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Button, Group, Div, FormItem, Select, Title, Separator, ButtonGroup, Text } from '@vkontakte/vkui';
import { Icon24StarsOutline, Icon24GameOutline, Icon28PodcastOutline, Icon24MoneyCircleOutline, Icon24Users3Outline } from '@vkontakte/icons';

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Мероприятия</PanelHeader>
		{fetchedUser &&
		<Group>
				{/* <CardGrid size="l">
				<Card mode="shadow">
				</Card>
				<ContentCard
					subtitle="мероприятия"
					header="ContentCard example"
					caption="VKUI Styleguide > Blocks > ContentCard"
					/>
				</CardGrid> */}
				<br/>
				<Div>
					<Title level="1" weight="1" style={{color:"#735CE6", textAlign:"center"}}>Добро пожаловать в Мероприятия!</Title>
				</Div>
				<br/>
				<Separator></Separator>
				<FormItem top="Кто вы?">
				<Select
					placeholder="Выберите"
					options={[
					{
						value: '0',
						label: 'Организатор',
					},
					{
						value: '1',
						label: 'Студент',
					},
					]}
				/>
				</FormItem>

				<FormItem top="Ваше ВУЗ">
				<Select
					placeholder="Выберите ВУЗ"
					options={[
					{
						value: '0',
						label: 'ДГТУ',
					},
					{
						value: '1',
						label: 'ЮФУ',
					},
					{
						value: '2',
						label: 'СПбГУ',
					},
					]}
				/>
				</FormItem>
					<br/>
				<Div>
					<Title level="3">Что Вас интересует?</Title>
					<Text style={{color:"grey"}}>Выберите минимум один из вариантов</Text>
					<br/>
				</Div>
				

				<ButtonGroup mode="vertical" gap="m" stretched>
					<ButtonGroup mode="horizontal" gap="m" stretched>
						<Button size="l" appearance="overlay"  style={{outline:"solid medium", outlineColor:"#FF3347", color:"#FF3347"}} before={<Icon24StarsOutline />} stretched>
						Развлечения
						</Button>
						<Button size="l" appearance="overlay" style={{outline:"solid medium", outlineColor:"#4BB34B", color:"#4BB34B"}} before={< Icon24GameOutline />} stretched>
						Игры
						</Button>
					</ButtonGroup>
					<ButtonGroup mode="horizontal" gap="m" stretched>
						<Button size="l" appearance="overlay" style={{outline:"solid medium", outlineColor:"#E03FAB", color:"#E03FAB"}} before={< Icon28PodcastOutline />} stretched>
						Леции
						</Button>
						<Button size="l" appearance="overlay" style={{outline:"solid medium", outlineColor:"#FFA000", color:"#FFA000"}} before={< Icon24MoneyCircleOutline />} stretched>
						Конкурсы
						</Button>
					</ButtonGroup>
					<ButtonGroup mode="horizontal" gap="m" stretched>
						<Button size="l" appearance="overlay" style={{outline:"solid medium", outlineColor:"#529EF4", color:"#529EF4"}} before={< Icon24Users3Outline />} stretched>
						Спорт
						</Button>
						<Button size="l" appearance="overlay" stretched>
						</Button>
					</ButtonGroup>
					<br/>
					<Button size="l" appearance="accent" style={{alignSelf:"center"}}>
						Начать
					</Button>

				</ButtonGroup>
				<br/>
				
				
		</Group>}
	</Panel>
);

Home.propTypes = {
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

export default Home;