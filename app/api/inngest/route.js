import { serve } from "inngest/next";

import { inngest } from "@/app/lib/inngest/client";
import { checkBudgetAlerts, generateMonthlyReports, processRecurringTransaction, triggerRecurringTransactions } from "@/app/lib/inngest/function";


export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    processRecurringTransaction,
    triggerRecurringTransactions,
    generateMonthlyReports,
    checkBudgetAlerts,
  ],
});


// import { serve } from "inngest/next";
// import { checkBudgetAlerts, helloWorld } from "@/app/lib/inngest/function";
// import { inngest } from "@/app/lib/inngest/client";

// //Create an API that serves zero functions
// export const { GET, POST, PUT } = serve({
//   client: inngest,
//   functions: [
//     /* your functions will be passed here later! */
//     checkBudgetAlerts,
//   ],
// });


