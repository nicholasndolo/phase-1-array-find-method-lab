// code your solution here

superbowlWin = (record) => {
    const result =record.find(recordItem =>recordItem.result ==="W");
    return result? result.year: undefined;
}

