import { getUserAccounts } from "@/actions/dashboard";
import { defaultCategories } from "@/data/categories";
import { getTransaction } from "@/actions/transaction";
import { AddTransactionForm } from "../_components/AddTransactionForm";

export default async function AddTransactionPage({ searchParams }) {
  // Await searchParams before using it
  const { edit: editId } = await searchParams;

  const accounts = await getUserAccounts();
  
  let initialData = null;
  if (editId) {
    const transaction = await getTransaction(editId);
    initialData = transaction;
  }

  return (
    <div className="max-w-3xl mx-auto px-5">
      <div className="flex justify-center md:justify-normal mb-8">
        <h1 className="text-5xl gradient-title">Add Transaction</h1>
      </div>
      <AddTransactionForm
        accounts={accounts}
        categories={defaultCategories}
        editMode={!!editId}
        initialData={initialData}
      />
    </div>
  );
}


// import { getUserAccounts } from "@/actions/dashboard";
// import { defaultCategories } from "@/data/categories";
// import { getTransaction } from "@/actions/transaction";
// import { AddTransactionForm } from "../_components/AddTransactionForm";

// export default async function AddTransactionPage({ searchParams }) {
//   const accounts = await getUserAccounts();
//   const editId = searchParams?.edit;

//   let initialData = null;
//   if (editId) {
//     const transaction = await getTransaction(editId);
//     initialData = transaction;
//   }

//   return (
//     <div className="max-w-3xl mx-auto px-5">
//       <div className="flex justify-center md:justify-normal mb-8">
//         <h1 className="text-5xl gradient-title ">Add Transaction</h1>
//       </div>
//       <AddTransactionForm
//         accounts={accounts}
//         categories={defaultCategories}
//         editMode={!!editId}
//         initialData={initialData}
//       />
//     </div>
//   );
// }