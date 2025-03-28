document.addEventListener("DOMContentLoaded", () => {
  // Navigation
  const backBtns = document.querySelectorAll(".back-btn");
  backBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  });

// Tab switching functionality
const tabs = document.querySelectorAll(".tab-btn");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    // Redirect based on data-tab value
    if (tab.dataset.tab === "business") {
      window.location.href = "merchant.html";
    } else if (tab.dataset.tab === "individual") {
      window.location.href = "index.html";
    }
  });
});


  // Copy wallet address functionality
  const walletAddress = document.getElementById("walletAddress");
  const copyBtns = document.querySelectorAll(".copy-btn");
  copyBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const textToCopy = walletAddress
        ? walletAddress.textContent
        : btn.previousElementSibling.textContent;
      navigator.clipboard.writeText(textToCopy).then(() => {
        btn.textContent = "✓";
        setTimeout(() => {
          btn.textContent = "📋";
        }, 2000);
      });
    });
  });

  // Settings button navigation
  const settingsBtn = document.getElementById("settingsBtn");
  if (settingsBtn) {
    settingsBtn.addEventListener("click", () => {
      window.location.href = "settings.html";
    });
  }

  // Send button navigation
  const sendBtn = document.getElementById("sendBtn");
  if (sendBtn) {
    sendBtn.addEventListener("click", () => {
      window.location.href = "send.html";
    });
  }

  // Receive button navigation
  const receiveBtn = document.getElementById("receiveBtn");
  if (receiveBtn) {
    receiveBtn.addEventListener("click", () => {
      window.location.href = "receive.html";
    });
  }
  // Merchant Receive button navigation
  const receiveMerchantBtn = document.getElementById("receive-merchant");
  if (receiveMerchantBtn) {
    receiveMerchantBtn.addEventListener("click", () => {
      window.location.href = "receive-merchant.html";
    });
  }

  // Merchant receive button navigation
  const merchantReceiveBtn = document.getElementById("merchantReceiveBtn");
  if (merchantReceiveBtn) {
    merchantReceiveBtn.addEventListener("click", () => {
      window.location.href = "receive.html";
    });
  }

  // Numpad functionality for send page
  const numpad = document.querySelector(".numpad");
  if (numpad) {
    const amountDisplay = document.querySelector(".amount-display");
    let currentAmount = "";

    numpad.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") {
        const value = e.target.textContent;

        if (value === "⌫") {
          currentAmount = currentAmount.slice(0, -1);
        } else if (value === "." && !currentAmount.includes(".")) {
          currentAmount += value;
        } else if (value !== ".") {
          currentAmount += value;
        }

        amountDisplay.textContent = currentAmount
          ? `${currentAmount} Pi`
          : "0 Pi";
      }
    });
  }

  // Sample transaction data
  const transactions = [
    {
      title: "Bills and groceries",
      time: "05:26 am",
      date: "21 Sep, 2024",
      amount: -31.415,
      type: "expense",
    },
    {
      title: "Savings",
      time: "05:26 am",
      date: "21 Sep, 2024",
      amount: -31.415,
      type: "expense",
    },
    {
      title: "Money received",
      time: "05:26 am",
      date: "21 Sep, 2024",
      amount: -3.1415,
      type: "income",
    },
    {
      title: "Money sent to Lorem",
      time: "05:26 am",
      date: "21 Sep, 2024",
      amount: -31.415,
      type: "expense",
    },
    {
      title: "Money received",
      time: "05:26 am",
      date: "21 Sep, 2024",
      amount: 31.4159,
      type: "income",
    },
  ];

  // Populate transactions
  const transactionList = document.querySelector(".transaction-list");
if (transactionList) {
  transactions.forEach((transaction) => {
    const isPositive = transaction.type === "income";
    const amountPrefix = isPositive ? "+" : "-";

    // Create parent transaction container
    const transactionBox = document.createElement("div");
    transactionBox.className = "transaction-main-box";

    // Create a wrapper for the icon and info
    const transactionDetails = document.createElement("div");
    transactionDetails.className = "transaction-details"; // New wrapper div

    // Create image element
    const imgEl = document.createElement("img");
    imgEl.src = `../images/${isPositive ? "income" : "expense"}.png`;
    imgEl.alt = transaction.type;
    imgEl.className = "transaction-icon"; // Add CSS class for styling

    // Create transaction info wrapper
    const infoWrapper = document.createElement("div");
    infoWrapper.className = "transaction-info";
    infoWrapper.innerHTML = `
        <span class="transaction-title">${transaction.title}</span>
        <span class="transaction-time">${transaction.time}</span>
    `;

    // Append image and info into transactionDetails div
    transactionDetails.appendChild(imgEl);
    transactionDetails.appendChild(infoWrapper);

    // Create transaction amount element
    const amountEl = document.createElement("div"); // Use div to wrap both amount and date
    amountEl.className = `transaction-amount ${isPositive ? "positive" : "negative"}`;
    amountEl.innerHTML = `
        <span>${amountPrefix}${Math.abs(transaction.amount)} Pi</span>
        <span class="transaction-date">${transaction.date}</span>
    `;

    // Append elements to transactionBox
    transactionBox.appendChild(transactionDetails); // Append the wrapper with icon and info
    transactionBox.appendChild(amountEl);

    // Append transactionBox to the transaction list
    transactionList.appendChild(transactionBox);
  });
}

});
