const utils = require("./index");

describe("[Exercise 1] trimProperties", () => {
  test("[1] returns an object with the properties trimmed", () => {
    // EXAMPLE
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    const actual = utils.trimProperties(input);
    expect(actual).toEqual(expected);
  });
  test("[2] returns a copy, leaving the original object intact", () => {
    const input = { foo: "foo", bar: "bar", baz: "baz" };
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    const actual = utils.trimProperties(input);
    expect(actual).toEqual(expected);
  });
});

describe("[Exercise 2] trimPropertiesMutation", () => {
  test("[3] returns an object with the properties trimmed", () => {
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    const actual = utils.trimProperties(input);
    expect(actual).toEqual(expected);
  });

  test("[4] the object returned is the exact same one we passed in", () => {
    const input = { foo: "foo", bar: "bar", baz: "baz" };
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    const actual = utils.trimProperties(input);
    expect(actual).toEqual(expected);
  });
});

describe("[Exercise 3] findLargestInteger", () => {
  test("[5] returns the largest number in an array of objects { integer: 2 }", () => {
    const input = [0, 54, 68, 23];
    const expected = 68;
    const actual = utils.findLargestInteger(input);
    expect(actual).toEqual(expected);
  });
});

describe("[Exercise 4] Counter", () => {
  let counter;
  beforeEach(() => {
    counter = new utils.Counter(3); // each test must start with a fresh couter
  });
  test("[6] the FIRST CALL of counter.countDown returns the initial count", () => {
    expect(counter.countDown()).toBe(3);
  });
  test("[7] the SECOND CALL of counter.countDown returns the initial count minus one", () => {
    counter.countDown();
    expect(counter.countDown()).toBe(2);
  });
  test("[8] the count eventually reaches zero but does not go below zero", () => {
    counter.countDown();
    counter.countDown();
    counter.countDown();
    expect(counter.countDown()).toBe(0);
  });
});

describe("[Exercise 5] Seasons", () => {
  let seasons;
  beforeEach(() => {
    seasons = new utils.Seasons(); // each test must start with fresh seasons
  });
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    expect(seasons.next()).toBe("summer");
  });
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    expect(seasons.next(2)).toBe("fall");
  });
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    expect(seasons.next(3)).toBe("winter");
  });
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    expect(seasons.next(4)).toBe("spring");
  });
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    expect(seasons.next(5)).toBe("summer");
  });
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    expect(seasons.next(40)).toBe("spring");
  });
});

describe("[Exercise 6] Car", () => {
  let focus;
  beforeEach(() => {
    focus = new utils.Car("focus", 20, 30); // each test must start with a fresh car
  });
  test("[15] driving the car returns the updated odometer", () => {
    expect(focus.drive(600)).toMatchObject({ odometer: 600, distance: 600 });
  });
  test("[16] driving the car uses gas", () => {
    expect(focus.drive(600)).toMatchObject({
      odometer: 600,
      distance: 600,
      tank: 0,
    });
  });
  test("[17] refueling allows to keep driving", () => {
    focus.drive(600);
    focus.refuel(20);
    expect(focus.drive(600)).toMatchObject({
      odometer: 600,
      distance: 600,
      tank: 0,
    });
  });
  test("[18] adding fuel to a full tank has no effect", () => {
    focus.drive(600);
    focus.refuel(270);
    expect(focus.drive(600)).toMatchObject({
      odometer: 600,
      distance: 600,
      tank: 0,
    });
  });
});

describe("[Exercise 7] isEvenNumberAsync", () => {
  test('[19] resolves true if passed an even number', async () => {
    let result = await utils.isEvenNumberAsync(6);
    expect(result).toBeTruthy();
  })
  test('[20] resolves false if passed an odd number', async () => {
    let result = await utils.isEvenNumberAsync(7);
    expect(result).toBeFalsy();
  })
});
