import React, { useState } from 'react';
import PropTypes, { func } from 'prop-types';

import { Panel, PanelHeader, Button, Group, Div, FormItem, Select, Title, Separator, ButtonGroup, Text } from '@vkontakte/vkui';
import { Icon24StarsOutline, Icon24GameOutline, Icon28PodcastOutline, Icon24MoneyCircleOutline, Icon24Users3Outline } from '@vkontakte/icons';

const Home = ({ id, go, fetchedUser, value, handleSelect, handleSelect2}) => ( 
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
				<Select onChange={handleSelect}
					placeholder="Выберите роль" defaultValue={'lk'}
					options={[
					{
						value: 'lkorg',
						label: 'Организатор',
					},
					{
						value: 'lk',
						label: 'Студент',
					},
					]}
				/>
				</FormItem>

				<FormItem top="Ваше факультет">
				<Select onChange={handleSelect2}
					placeholder="Выберите факультет" defaultValue={'МКиМТ'}
					options={[
					{
						value: 'МКиМТ',
						label: 'МКиМТ',
					},
					{
						value: 'ИИВТ',
						label: 'ИИВТ',
					},
					{
						value: 'АгПр',
						label: 'АгПр',
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
				
				{/* outline:"solid medium", outlineColor:"#4BB34B",  */}
				<ButtonGroup mode="vertical" gap="m" stretched>
					<ButtonGroup mode="horizontal" gap="m" stretched>
						<Button size="l" appearance="positive"  style={{color:"#FF3347", marginLeft:"2%"}} mode="outline" before={<Icon24StarsOutline />} stretched>
						Развлечения
						</Button>
						<Button size="l" appearance="positive" style={{color:"#4BB34B", marginRight:"2%"}} mode="outline" before={< Icon24GameOutline />} stretched>
						Игры
						</Button>
					</ButtonGroup>
					<ButtonGroup mode="horizontal" gap="m" stretched>
						<Button size="l" appearance="positive" style={{color:"#E03FAB", marginLeft:"2%"}} mode="outline" before={< Icon28PodcastOutline />} stretched>
						Лекции
						</Button>
						<Button size="l" appearance="positive" style={{color:"#FFA000", marginRight:"2%"}} mode="outline" before={< Icon24MoneyCircleOutline />} stretched>
						Конкурсы
						</Button>
					</ButtonGroup>
					<ButtonGroup mode="horizontal" gap="m" stretched>
						<Button size="l" appearance="positive" style={{color:"#529EF4", marginLeft:"2%", marginRight:"50.8%"}} mode="outline" before={< Icon24Users3Outline />} stretched>
						Спорт
						</Button>
					</ButtonGroup>
					<br/>
					<Button size="l" appearance="accent" onClick={go} data-to="recommended" style={{alignSelf:"center"}}>
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
