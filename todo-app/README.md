# ToDo アプリケーション (React & TypeScript)

これはReactとTypeScriptで構築されたシンプルなToDoアプリケーションです。タスクの管理、カテゴリ分類、フィルタリング機能を提供します。

## 主な機能

*   **カテゴリ管理**:
    *   ユーザーは独自のカテゴリを作成できます（例: 「仕事」「プライベート」「学習」）。
    *   作成したカテゴリはタスクに割り当てることができます。
*   **タスク管理**:
    *   新しいタスクをテキストで簡単に追加できます。
    *   各タスクには、作成済みのカテゴリの中から一つを割り当てることができます（カテゴリなしも可能です）。
    *   タスクごとに完了／未完了の状態をチェックボックスで切り替えることができます。
*   **フィルタリング**:
    *   **進捗フィルター**: タスクを「すべて」「未完了」「完了済み」の状態で絞り込めます。
    *   **カテゴリフィルター**: 特定のカテゴリに属するタスクのみを表示できます。
    *   進捗とカテゴリのフィルターは組み合わせて使用することも可能です。
*   **データ永続化**:
    *   追加／変更したカテゴリやタスクの情報は、お使いのブラウザのローカルストレージに自動的に保存されます。
    *   次回アプリケーションを開いた際も、以前の状態が復元されます。

## 技術スタック

*   React
*   TypeScript
*   Create React App
*   基本的なCSS（App.css）

---
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
