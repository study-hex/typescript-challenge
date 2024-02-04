/**
 * 任務：實作一個函式 `classifyAge`，根據年齡進行分類。
 *
 * 範例：
 * classifyAge(10) 應該回傳 "Child"
 * classifyAge(15) 應該回傳 "Teenager"
 * classifyAge(30) 應該回傳 "Adult"
 * classifyAge(70) 應該回傳 "Senior"
 *
 * @param age - 一個需要被分類的年齡
 * @returns - 回傳年齡的分類結果
 */

const ageClassification = {
    Child: 10,
    Teenager: 15,
    Adult: 30,
    Senior: 70
}
export function classifyAge(age: number): string {
    // 請在此處寫下你的程式碼
    // #NOTES: 因為 'string' 類型的運算式無法用於索引類型
    // TypeScript 預設不允許使用 string 類型的變數來索引物件，除非該物件明確地定義了 string 索引簽章
    let previousClassification = null;
    for (let classification in ageClassification) {
        if (age <= ageClassification[classification as keyof typeof ageClassification]) {
            return classification;
        }
        previousClassification = classification;
    }
    return previousClassification ?? '';
}

classifyAge(10);
classifyAge(15);

// for (const key in ageClassification) {
//     if (age < ageClassification[key as keyof typeof ageClassification]) {
//         console.log(key);
//         return key;
//     }
// }