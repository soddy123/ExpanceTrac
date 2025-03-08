import { getAccountWithTransactions } from '@/actions/accounts';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { BarLoader } from 'react-spinners';
import { TransactionTable } from '../_components/transaction-table';
import { AccountChart } from '../_components/account-chart';

const AccountPage = async ({ params }) => {
  // Await the params object before accessing it
  const { id } = await params;

  // Fetch account data with the awaited id
  const accountData = await getAccountWithTransactions(id);

  // Ensure notFound is called properly
  if (!accountData) {
    return notFound(); // Ensure to return here to avoid further execution
  }

  const { transactions, ...account } = accountData;

  return (
    <div className="space-y-8 px-5">
      <div className="flex gap-4 items-end justify-between">
        <div>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight gradient-title capitalize">
            {account.name}
          </h1>
          <p className="text-muted-foreground">
            {account.type.charAt(0) + account.type.slice(1).toLowerCase()} Account
          </p>
        </div>

        <div className="text-right pb-2">
          <div className="text-xl sm:text-2xl font-bold">
            ${parseFloat(account.balance).toFixed(2)}
          </div>
          <p className="text-sm text-muted-foreground">
            {account._count.transactions} Transactions
          </p>
        </div>
      </div>

      {/* Chart Section */}
      <Suspense
        fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ea" />}
      >
        <AccountChart transactions={transactions} />
      </Suspense>

      {/* Transactions Table */}
      <Suspense fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ea" />}>
        <TransactionTable transactions={transactions} />
      </Suspense>
    </div>
  );
};

export default AccountPage;



// import { getAccountWithTransactions } from '@/actions/accounts';
// import { notFound } from 'next/navigation';
// import { Suspense } from 'react';
// import { BarLoader } from 'react-spinners';
// import { TransactionTable } from '../_components/transaction-table';
// import { AccountChart } from '../_components/account-chart';

// const AccountPage = async ({ params }) => {
//   const accountData = await getAccountWithTransactions(params.id);

//   // Ensure notFound is called properly
//   if (!accountData) {
//     return notFound();  // Ensure to return here to avoid further execution
//   }

//   const { transactions, ...account } = accountData;

//   return (
//     <div className="space-y-8 px-5">
//       <div className="flex gap-4 items-end justify-between">
//         <div>
//           <h1 className="text-5xl sm:text-6xl font-bold tracking-tight gradient-title capitalize">
//             {account.name}
//           </h1>
//           <p className="text-muted-foreground">
//             {account.type.charAt(0) + account.type.slice(1).toLowerCase()} Account
//           </p>
//         </div>

//         <div className="text-right pb-2">
//           <div className="text-xl sm:text-2xl font-bold">
//             ${parseFloat(account.balance).toFixed(2)}
//           </div>
//           <p className="text-sm text-muted-foreground">
//             {account._count.transactions} Transactions
//           </p>
//         </div>
//       </div>

//       {/* Chart Section */}
//       <Suspense
//         fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ea" />}
//       >
//         <AccountChart transactions={transactions} />
//       </Suspense>

      
//       {/* Transactions Table */}
//       <Suspense fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ea" />}>
//         <TransactionTable transactions={transactions} />
//       </Suspense>
//     </div>
//   );
// };

// export default AccountPage;
