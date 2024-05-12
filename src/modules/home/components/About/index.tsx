import BlockTitle from '@modules/common/components/BlockTitle';
import IconFrame from '@modules/common/components/IconFrame';
import SplitBlocks from '@modules/common/components/SplitBlocks';

import s from './About.module.scss';
import {advantagesList} from "@modules/home/components/About/data";
import {FC, type ReactNode} from "react";

const About: FC<{
	children?: ReactNode
}> = ({children}) => {
	return (
		<section id="about">
			<BlockTitle title="Про компанію"/>

			<ul className={s.advantages}>
				{advantagesList.map((item) => (
					<li className={s.advantagesItem} key={item.desc}>
						<IconFrame icon={item.icon}/>
						<p className={s.advantagesDesc}>{item.desc}</p>
					</li>
				))}
			</ul>

			<SplitBlocks
				title={`ТОВАРИСТВО З ОБМЕЖЕНОЮ ВІДПОВІДАЛЬНІСТЮ "СЕНТ ПРО" (ТОВ "СЕНТ ПРО") зареєстроване як фінансова установа відповідно до Розпорядження Національної комісії`}
				titleType="text"
			>
				<p>
					Установа здійснює державне регулювання у сфері ринків фінансових
					послуг від
					02.06.2020 року № 1123 (Свідоцтво про реєстрацію фінансової установи
					ФК
					№В0000145 від 27.01.2021) господарська діяльність установи полягає у
					наданні фінансових послуг:
				</p>
				<ul>
					<li>надання коштів та банківських металів у кредит;</li>
					<li>надання послуг з факторингу;</li>
					<li>надання послуг з фінансового лізингу.</li>
				</ul>

				<p>
					Ідентифікаційний код юридичної особи: 43580771
					<br/>
					Місцезнаходження юридичної особи: Україна, 03056, місто Київ, вул.
					Борщагівська, буд. 154
					<br/>
					Керівник - БОГДАН ОЛЕКСАНДР ЄВГЕНОВИЧ
					<br/>
					Звертатися з отримання фінансових послуг можете за адресою: Україна,
					03056,
					місто Київ, вул.Борщагівська, будинок 154 або за телефоном
					+38(091)-481-94-67
				</p>
				<p>
					<strong>Товариство не надає </strong>
					{`споживчі кредити у розумінні Закону України "Про споживче кредитування" ТОВ «СЕНТ ПРО» не здійснює кредитування фізичних осіб та не здійснює врегулювання простроченої заборгованості фізичних осіб.`}
				</p>
			</SplitBlocks>

			{children}
		</section>
	);
};

export default About;
