import Accordion from '@modules/common/components/Accordion';
import DocumentsList from '@modules/common/components/DocumentsList';
import SplitBlocks from '@modules/common/components/SplitBlocks';
import { lendingDocumentsList } from '@modules/home/components/About/data';

const HomeFinancialServices = () => {
	return (
		<SplitBlocks
			title="Фінансові послуги"
			titleType="heading"
			anchor="fin-services"
		>
			<Accordion title="Кредитування">
				<DocumentsList list={lendingDocumentsList} />
			</Accordion>
		</SplitBlocks>
	);
};

export default HomeFinancialServices;
