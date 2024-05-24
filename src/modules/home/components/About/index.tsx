import { FC, type ReactNode } from 'react';

import BlockTitle from '@modules/common/components/BlockTitle';
import IconFrame from '@modules/common/components/IconFrame';
import SplitBlocks from '@modules/common/components/SplitBlocks';
import { advantagesList } from '@modules/home/components/About/data';

import s from './About.module.scss';

const About: FC<{
	children?: ReactNode;
}> = ({ children }) => {
	return (
		<section id="about">
			<BlockTitle title="Про компанію" />

			<ul className={s.advantages}>
				{advantagesList.map((item) => (
					<li className={s.advantagesItem} key={item.desc}>
						<IconFrame icon={item.icon} />
						<p className={s.advantagesDesc}>{item.desc}</p>
					</li>
				))}
			</ul>

			<SplitBlocks
				title={`ТОВАРИСТВО З ОБМЕЖЕНОЮ ВІДПОВІДАЛЬНІСТЮ "ЛАЙТ ФІНАНС" (ТОВ "ЛАЙТ ФІНАНС") зареєстроване як фінансова установа відповідно до Розпорядження Національної комісії`}
				titleType="text"
			>
				<p>
					Установа здійснює державне регулювання у сфері ринків фінансових послуг від
					02.06.2020 року № 1124(Свідоцтво про реєстрацію фінансової установи ФК
					№В0000140 від 18.01.2021), господарська діяльність якого полягає у наданні
					фінансових послуг:
				</p>

				<ul>
					<li>надання коштів та банківських металів у кредит;</li>
					<li>надання послуг з факторингу;</li>
					<li>надання послуг з фінансового лізингу.</li>
				</ul>

				<p>
					Ідентифікаційний код юридичної особи: 43580874
					<br />
					Місцезнаходження юридичної особи: Україна, 03056, місто Київ, вул.
					Борщагівська, буд. 154
					<br />
					Керівник - Дума Віктор Олександрович
					<br />
					Звертатися з отримання фінансових послуг можете за адресою: Україна, 03056,
					місто Київ, вул.Борщагівська, будинок 154 або за телефоном
					+38(091)-481-88-39
				</p>
				<p>
					<strong>ТОВ «ЛАЙТ ФІНАНС» </strong>
					не здійснює надання фінансових послуг фізичним особам, а саме не здійснює
					надання коштів у кредит та/або надання послуг факторингу та/або надання
					послуг фінансового лізингу фізичним особам-споживачам та/або врегулювання
					простроченої заборгованості з фізичними-особами споживачами фінансових
					послуг.
				</p>
			</SplitBlocks>

			{children}
		</section>
	);
};

export default About;
