type JSONPrimitive = string | number | boolean | null;
type JSONObject = { [key: string]: JSONValue };
/**
 * A JSON array type   [    ]
 */
type JSONArray = JSONValue[];

function isJSON(arg: JSONValue) {}

/**
 * A type representing any valid JSON value
 */
type JSONValue = JSONPrimitive | JSONArray | JSONObject;

//✔️ POSITIVE test cases (must pass)
isJSON('hello'); //✔️ Strings
isJSON([4, 8, 15, 16, 23, 42]); //✔️ Arrays of numbers
isJSON({ greeting: 'hello' }); //✔️ Objects
isJSON(false); //✔️ Boolean values
isJSON(true);
isJSON(null); //✔️ null values
isJSON({ a: { b: [2, 3, 'foo', null, false] } }); //✔️ A complex object
isJSON({ j: { b: 12 } });

// //! NEGATIVE test cases (must fail)
// //@ts-expect-error
// isJSON(() => ''); //! Functions are not valid JSON
// // @ts-expect-error
// isJSON(class {}); //! Classes are not valid JSON
// isJSON(undefined); //! undefined is not valid JSON
// // @ts-expect-error
// isJSON(BigInt(143)); //! BigInts are not valid JSON
