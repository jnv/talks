---
title: Testing With Jest
---

# Testing With Jest 🃏

- Nastavení
- Základní API
- Watch Mode
- Mockování
- Snapshot testing

----

[github.com/jnv/jest-demo](https://github.com/jnv/jest-demo)

---

```
npm i --save-dev jest
```

---

## Jmenné konvence

- Adresář: `__test__`
- Soubory: `*.test.js(x)`

----

## Konfigurace

- `package.json` nebo `jest.config.js`
- Užitečné volby:
  - [`modulePaths`](https://facebook.github.io/jest/docs/en/configuration.html#modulepaths-array-string)
  - [`clearMocks`](https://facebook.github.io/jest/docs/en/configuration.html#clearmocks-boolean)

<small>https://facebook.github.io/jest/docs/en/configuration.html</small>

---

# API

```js
describe('sum', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
  })
})
```

<small>https://facebook.github.io/jest/docs/en/expect.html</small>

----

```js
// Chai
expect(foo).to.equal('bar')

// Jest
expect(foo).toEqual('bar')
// nebo
expect(foo).toBe('bar')
```

----

### Hooks

- `beforeAll`, `afterAll`
- `beforeEach`, `afterEach`
- Izolace testů

<small>https://facebook.github.io/jest/docs/en/api.html</small>


---

# Watch Mode

```sh
# ./node_modules/.bin/jest --watch

npx jest --watch
```

<small>[Jest 19: Immersive Watch Mode](http://facebook.github.io/jest/blog/2017/02/21/jest-19-immersive-watch-mode-test-platform-improvements.html)</small>

---

# Mockování

- adresář `__mocks__`
- `jest.mock('cesta-k-modulu')`
- `require.requireMock('cesta-k-modulu)`

----

# `jest.fn()`

```js
const mocked = jest.fn().mockImplementation((arg) => ...)

expect(mocked).toHaveBeenCalledWith('some arg')
```

<small>https://facebook.github.io/jest/docs/en/mock-function-api.html</small>

---

# Snapshot Testing

```js
expect(result).toMatchSnapshot()
```

`jest -u` aktualizuje snapshoty

<small>http://facebook.github.io/jest/docs/en/snapshot-testing.html</small>

----

## Snaphoty v Mocha / Chai

- https://github.com/bahmutov/snap-shot-it
- https://github.com/wellguimaraes/mocha-snapshots
- https://github.com/suchipi/chai-jest-snapshot
- https://github.com/marvinhagemeister/chai-snapshot-tests