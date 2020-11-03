// Установка - RTL интегрирована в create-react-app

import { findByAltText, queryByTestId, render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('Test', () => {
		const app = render(<App />);  // возвращает объект "отрендеренного" компонента Предоставляет ряд методов
		screen.debug(); // объект "экрана" с отрисовкой компонента. Предоставляет ряд методов
    expect(screen.getByText(/react/i)).toBeInTheDocument();
  });
});

// Поисковые типы https://testing-library.com/docs/dom-testing-library/api-queries

// все методы принимают два аргумента (find... три). Первый - строка, регулярка или функция; второй - объект queryOptions; третий - объект waitForOptions
getBy... // если не находит, возвращает ошибку (тест падает даже без exact)
queryBy... // если не находит, возвращает null (использовать, если ожидается null)
findBy... // возвращает Promise, который резольвится, когда элемент появляется в документе. Стандартное время ожидания - 1000 (можно настроить). Используется для тестирования асинхронных запросов.

...AllBy... // одиночные методы возвращают ошибку, если найдено более одного элемента, соответствующего запросу. ...AllBy... возвращает ([] для get... и find... , для query... null) если ничего не нашел или массив найденных элементов.

...Text // ищет элементы, TextContent которых соответствует запросу
...DisplayValue // ищет inputs, selects or text-areas, у ктороых value соответствует запросу
...TestId // ищет элемент с атрибутом data-testid, соответствующим запросу
...Title // ищет элемент с атрибутом title, соответствующим запросу. Кроме этого находит элемент <title></title> внутри SVG
...AltText // ищет элемент с атрибутом alt (обычно изображение), соответствующим запросу.
...Role // ищет элемент либо по явно указанному атрибуту role, либо по роли по умолчанию https://www.w3.org/TR/html-aria/#docconformance
...LabelText // ищет элемент, ассоциированный с <label><label/>, TextContent которого соответствует запросу
...PlaceholderText // ищет элемент с атрибутом placeholder, соответствующим запросу.

// методы expect

toBe,
toBeCloseTo,
toBeDefined,
toBeFalsy,
toBeGreaterThan,
toBeGreaterThanOrEqual,
toBeInstanceOf,
toBeLessThan,
toBeLessThanOrEqual,
toBeNaN,
toBeNull,
toBeTruthy,
toBeUndefined,
toContain,
toContainEqual,
toEqual,
toHaveLength,
toHaveProperty,
toMatch,
toMatchObject,
toStrictEqual,
lastCalledWith,
lastReturnedWith,
nthCalledWith,
nthReturnedWith,
toBeCalled,
toBeCalledTimes,
toBeCalledWith,
toHaveBeenCalled,
toHaveBeenCalledTimes,
toHaveBeenCalledWith,
toHaveBeenLastCalledWith,
toHaveBeenNthCalledWith,
toHaveLastReturnedWith,
toHaveNthReturnedWith,
toHaveReturned,
toHaveReturnedTimes,
toHaveReturnedWith,
toReturn,
toReturnTimes,
toReturnWith,
toThrow,
toThrowError,
toMatchInlineSnapshot,
toMatchSnapshot,
toThrowErrorMatchingInlineSnapshot,
toThrowErrorMatchingSnapshot,
toBeInTheDOM,
toBeInTheDocument,
toBeEmpty,
toBeEmptyDOMElement,
toContainElement,
toContainHTML,
toHaveTextContent,
toHaveAttribute,
toHaveClass,
toHaveStyle,
toHaveFocus,
toHaveFormValues,
toBeVisible,
toBeDisabled,
toBeEnabled,
toBeRequired,
toBeInvalid,
toBeValid,
toHaveValue,
toHaveDisplayValue,
toBeChecked,
toBePartiallyChecked,
toHaveDescription
