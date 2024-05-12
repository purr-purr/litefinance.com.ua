import About from '@modules/home/components/About';
import Contacts from '@modules/home/components/Contacts';
import Intro from '@modules/home/components/Intro';
import ReportViolation from '@modules/home/components/ReportViolation';
import RightsProtection from '@modules/home/components/RightsProtection';
import FinancialServices from "@modules/home/components/FinancialServices";
import Reports from "@modules/home/components/Reports";

const Home = () => {
	return (
		<>
			<Intro/>

			<About>
				<FinancialServices/>
			</About>

			<RightsProtection>
				<Reports/>
			</RightsProtection>

			<ReportViolation/>
			<Contacts/>
		</>
	);
};

export default Home;
