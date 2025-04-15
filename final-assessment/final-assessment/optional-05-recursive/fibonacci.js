function fibonacci(n, sequence = [0, 1]) {
    if (n === 0) return [0];
    if (n === 1) return [0, 1];
    
    const newSequence = fibonacci(n - 1);
    newSequence.push(newSequence[newSequence.length - 1] + newSequence[newSequence.length - 2]);
    return newSequence;
  }

// Jangan hapus kode di bawah ini!
export default fibonacci;
