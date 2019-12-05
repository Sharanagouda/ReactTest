
import timerGame from "./timerGame";
jest.useFakeTimers();
test('waits 1 sec before ending the game', () => {
    timerGame();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function),1000);
})