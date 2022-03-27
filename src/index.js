import printValue from './printValues'

export const mixed = {
    default: '${path} صحیح نمی باشد',
    required: 'وارد کردن ${path} ضروری است',
    oneOf: '${path} باید یکی از این مقادیر باشد: ${values}',
    notOneOf: '${path} نمی تواند از این مقادیر باشد: ${values}',
    notType: ({ path, type, value, originalValue }) => {
        let isCast = originalValue != null && originalValue !== value
        let msg =
            `${path} باید از نوع \`${type}\` باشد, ` +
            `ولی مقدار وارد شده: \`${printValue(value, true)}\` است` +
            (isCast ? ` (تبدیل از \`${printValue(originalValue, true)}\`).` : '.')

        if (value === null) {
            msg += '\n اگر از "null" به جای مقدار خالی استفاده میکنید از `.nullable()` استفاده کنید'
        }

        return msg
    },
    defined: '${path} وارد نشده'
}

// NOTE: @types/yup currently missing `string.uuid` field definition.
export const string = {
    length: 'طول ${path} باید دقیقاً ${length} کاراکتر باشد',
    min: 'طول ${path} باید از ${min} کاراکتر بیشتر باشد',
    max: 'طول ${path} نباید بیشتر از ${max} کاراکتر باشد',
    matches: '${path} باید به این فرم باشد: "${regex}"',
    email: '${path} به عنوان ایمیل قابل قبول نیست',
    url: '${path} به عنوان URL صحیح نیست',
    uuid: '${path} به عنوان UUID صحیح نیست',
    trim: '${path} نباید فاصله اضافی در ابتدا و انتها داشته باشد',
    lowercase: '${path} باید تنها دارای حروف کوچک باشد',
    uppercase: '${path} باید تنها دارای حروف بزرگ باشد'
}

// NOTE: @types/yup currently missing `string.notEqual` field definition.
export const number = {
    min: '${path} باید بیشتر یا مساوی ${min} باشد',
    max: '${path} باید کمتر یا مساوی ${max} باشد',
    lessThan: '${path} باید کمتر از ${less} باشد',
    moreThan: '${path} باید بیشتر از ${more} باشد',
    positive: '${path} باید یک عدد مثبت باشد',
    negative: '${path} باید یک عدد منفی باشد',
    integer: '${path} باید عدد صحیح باشد'
}

// To format date, use the second argument of yup.date().min/max.
export const date = {
    min: '${path} باید بعد از ${min} باشد',
    max: '${path} باید قبل از ${max} باشد'
}

export const boolean = {
    isValue: '${path} باید ${value} باشد'
}

export const object = {
    noUnknown: 'کلید مربوط به ${path} یافت نشد: ${unknown}'
}

export const array = {
    min: '${path} باید حداقل ${min} آیتم داشته باشد',
    max: '${path} باید حداکثر ${max} آیتم داشته باشد',
    length: '${path} باید دقیقاً دارای ${length} آیتم باشد'
}

/**
 * Descriptive messages. 
 * we may add other flavors later on so we use
 * named exports and default export will always be
 * this descriptive flavor
 */
export const descriptive = {
    mixed,
    string,
    number,
    date,
    boolean,
    object,
    array
}
export default descriptive