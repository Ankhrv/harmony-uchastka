import React from 'react';
import './5.css';
import { Helmet } from 'react-helmet';

const Five = () => {

	return (

		<div>

		<Helmet>
        <title>Гармония Участка</title>
        <meta name="description" content="Прайс-лист и цена на услуги" />
        <meta name="theme-color" content="#0D8259" />
      </Helmet>
	  <p className='PP'>Прайс - лист</p>
			<div className='GG'>

				<table border="0px" width="100%"
					cellPadding="8" cellSpacing="0" id="table">
					<thead>
						<tr>
							<td>Услуга</td>
							<td>Единица измерения</td>
							<td>Цена в рублях</td>
						</tr>
					</thead>
					<tbody>
						<tr>

							<td>Простая территория</td>
							<td>100 м2</td>
							<td>от 25 000</td>

						</tr>

						<tr>

							<td>Сложная территория</td>
							<td>100 м2</td>
							<td>индивидуальный расчет</td>

						</tr>

						<tr>

							<td>Освещение сада</td>
							<td>проект</td>
							<td>по проекту</td>

						</tr>

						<tr>

							<td>Обслуживание участков</td>
							<td>месяц</td>
							<td>договорная</td>

						</tr>

					</tbody>

				</table>
			</div></div>

	);
}

export default Five;