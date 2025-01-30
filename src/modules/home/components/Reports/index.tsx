import Accordion from '@modules/common/components/Accordion';
import DocumentsList from '@modules/common/components/DocumentsList';
import SplitBlocks from '@modules/common/components/SplitBlocks';
import {
	archivedInformation,
	auditReports,
	financeReports,
	infoFinancialInstitution,
	infoOwnershipStructure,
	innerRules,
	news,
} from '@modules/home/components/Reports/data';

const Reports = () => {
	return (
		<SplitBlocks title="звітність" titleType="heading" anchor="reports">
			<Accordion title="Внутрішні правила">
				<DocumentsList list={innerRules} />
			</Accordion>

			<Accordion title="Інформація про фінансову установу">
				<p>
					<strong>Повне найменування юридичної особи</strong>
				</p>
				<p>{`ТОВАРИСТВО З ОБМЕЖЕНОЮ ВІДПОВІДАЛЬНІСТЮ "ЛАЙТ ФІНАНС"
(ТОВ "ЛАЙТ ФІНАНС")`}</p>
				<br />
				<p>
					<strong>Ідентифікаційний код юридичної особи</strong>
				</p>
				<p>Код ЄДРПОУ 43580874</p>
				<br />
				<p>
					<strong>Місцезнаходження юридичної особи</strong>
				</p>
				<p>Україна, 03056, місто Київ, вул.Борщагівська, будинок 154</p>
				<br />
				<p>
					<strong>Перелік засновників/учасників юридичної особи:</strong>
				</p>
				<p>
					ДУМА ВІКТОР ОЛЕКСАНДРОВИЧ, Країна громадянства: Україна; Розмір внеску до
					статутного фонду: 5 100 000,00 грн; Частка (%): 100,00%
				</p>
				<br />

				<p>
					<strong>Відомості про органи управління юридичної особи</strong>
				</p>

				<p>ЗАГАЛЬНІ ЗБОРИ УЧАСНИКІВ; ДИРЕКТОР</p>
				<br />
				<p>
					<strong>
						Прізвище, ім{"'"}я, по батькові, дата обрання (призначення) осіб, які
						обираються (призначаються) до органу управління юридичної особи,
						уповноважених представляти юридичну особу у правовідносинах з третіми
						особами, або осіб, які мають право вчиняти дії від імені юридичної особи
						без довіреності, у тому числі підписувати договори та дані про наявність
						обмежень щодо представництва від імені юридичної особи
					</strong>
				</p>
				<br />
				<p>Дума Віктор Олександрович - керівник</p>
				<br />
				<p>
					<strong>
						Дата та номер запису в Єдиному державному реєстрі про проведення державної
						реєстрації юридичної особи – у разі, коли державна реєстрація юридичної
						особи була проведена після набрання чинності Законом України &quot;Про
						державну реєстрацію юридичних осіб та фізичних осіб-підприємців&quot;
					</strong>
				</p>
				<br />
				<p>
					Дата запису: 30.03.2020 <br /> Номер запису: 1 070 102 0000 087172
				</p>
				<br />
				<p>
					<strong>Місцезнаходження реєстраційної справи</strong>
				</p>

				<p>Солом{"'"}янська районна в місті Києві державна адміністрація</p>
				<br />
				<p>
					<strong>
						Дата та номер запису про взяття та зняття з обліку, назва та
						ідентифікаційні коди органів статистики, Міндоходів, Пенсійного фонду
						України, в яких юридична особа перебуває на обліку:
					</strong>
				</p>

				<p>
					31.03.2020, ДЕРЖАВНА СЛУЖБА СТАТИСТИКИ УКРАЇНИ, 37507880;
					<br />
					<br />
					30.03.2020, 265520083222, ГОЛОВНЕ УПРАВЛІННЯ ДПС У М.КИЄВІ, ДПІ У СОЛОМ
					{"'"}ЯНСЬКОМУ РАЙОНІ (СОЛОМ{"'"}ЯНСЬКИЙ РАЙОН М.КИЄВА), 43141267,
					21.01.2021, (дані про взяття на облік як платника податків);
					<br />
					<br />
					30.03.2020, 10000001775328, ГОЛОВНЕ УПРАВЛІННЯ ДПС У М.КИЄВІ, ДПІ У СОЛОМ
					{"'"}ЯНСЬКОМУ РАЙОНІ (СОЛОМ{"'"}ЯНСЬКИЙ РАЙОН М.КИЄВА), 43141267, (дані про
					взяття на облік як платника єдиного внеску)
				</p>
				<br />
				<p>
					<strong>Інформація про здійснення зв{"'"}язку з юридичною особою</strong>
				</p>
				<p>
					Телефон 1: +380(91) 481-88-39
					<br />
					Адреса електронної пошти:{' '}
					<a href="mailto:litefinance@ukr.net" target="_blank" rel="noreferrer">
						litefinance@ukr.net
					</a>
				</p>

				<DocumentsList list={infoFinancialInstitution} />
			</Accordion>

			<Accordion title="Інформація про структуру власності">
				<DocumentsList groupList={infoOwnershipStructure} />
			</Accordion>

			<Accordion title="Аудиторські висновки">
				<DocumentsList list={auditReports} />
			</Accordion>

			<Accordion title="Фінансова звітність">
				<DocumentsList groupList={financeReports} />
			</Accordion>

			<Accordion title="Архівна інформація">
				<DocumentsList list={archivedInformation} />
			</Accordion>

			<Accordion title="Оголошення/Повідомлення">
				<DocumentsList list={news} />
			</Accordion>
		</SplitBlocks>
	);
};

export default Reports;
