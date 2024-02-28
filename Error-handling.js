try {
    const num = 10;
    if (num > 5) {
      throw new Error("Number is too large!"); // Simulating an error condition
    }
    console.log("This line will not be executed if an error is thrown.");
  } catch (error) {
    console.log("An error occurred:", error.message);
  }