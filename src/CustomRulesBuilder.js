import React from "react";
import "./css/CustomRulesBuilder.css";
import SearchBar from "./SearchBar";
import RuleConditions from "./RuleConditions";
import PropTypes from "prop-types";
import ReactHtmlParser from "react-html-parser";

class FilteredResults extends React.Component {
  static propTypes = {
    step: PropTypes.number,
    isSpecialKey: PropTypes.bool,
    keywordsList: PropTypes.array,
    operatorsList: PropTypes.array,
    valuesList: PropTypes.array,
    onKeywordsClick: PropTypes.func,
    onOperatorsClick: PropTypes.func,
    onValuesClick: PropTypes.func,
    onMouseOver: PropTypes.func,
    helpText: PropTypes.string
  }

  render() {
    return (
      <table className={"filtered_results" + (this.props.step === 0 ||
        (this.props.step === 1 && this.props.keywordsList.length === 0) ||
        (((this.props.isSpecialKey !== true && this.props.step === 2) || (this.props.isSpecialKey === true && this.props.step === 3)) && this.props.operatorsList.length === 0) ||
        (this.props.isSpecialKey !== true && this.props.step === 3 && this.props.valuesList.length === 0) ?
        " hidden_filter" : "")}>
        <tbody>
          <tr>
            <td className="left-content" valign="top">
              {this.props.step === 1 &&
                <KeywordsPanel keywordsList={this.props.keywordsList} onClick={this.props.onKeywordsClick} onMouseOver={this.props.onMouseOver}/>
              }
              {((this.props.isSpecialKey !== true && this.props.step === 2) ||
                (this.props.isSpecialKey === true && this.props.step === 3)) &&
                <OperatorsPanel operatorsList={this.props.operatorsList} onClick={this.props.onOperatorsClick}/>
              }
              {this.props.step === 3 &&
                <ValuesPanel valuesList={this.props.valuesList} onClick={this.props.onValuesClick}/>
              }
            </td>
            <td className="right-content">
              {this.props.step === 1 &&
                <DescriptionPanel helpText={this.props.helpText}/>
              }
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

class ValuesPanel extends React.Component {
  static propTypes = {
    valuesList: PropTypes.array,
    onClick: PropTypes.func
  }

  render() {
    return (
      <div className="values_panel">
        {this.props.valuesList && this.props.valuesList.map((entry) => {
          return (
            <div key={entry.id}>
              <button onClick={() => this.props.onClick(entry.value)}>{entry.value}</button>
            </div>
          );
        })}
      </div>
    );
  }
}

class OperatorsPanel extends React.Component {
  static propTypes = {
    operatorsList: PropTypes.array,
    onClick: PropTypes.func
  }
  render() {
    return (
      <div className="operators_panel">
        {this.props.operatorsList && this.props.operatorsList.map((operator) => {
          return (
            <div key={operator.id}>
              <button onClick={() => this.props.onClick(operator.name, operator.operator)}>{operator.name}</button>
            </div>
          );
        })}
      </div>
    );
  }
}

class KeywordsPanel extends React.Component {
  static propTypes = {
    keywordsList: PropTypes.array,
    onClick: PropTypes.func,
    onMouseOver: PropTypes.func
  }

  render() {
    return (
      <div className="keywords_panel">
        {this.props.keywordsList && this.props.keywordsList.map((keywords) => {
          return (
            <div key={keywords.id}>
              <button onClick={() => this.props.onClick(keywords.id)} onMouseOver={() => this.props.onMouseOver(keywords.id)}>{keywords.keyword}</button>
            </div>
          );
        })}
      </div>
    );
  }
}

class DescriptionPanel extends React.Component {
  static propTypes = {
    helpText: PropTypes.string
  }

  render() {
    return (
      <div className="description_panel">
        <div className="content">{ReactHtmlParser(this.props.helpText)}</div>
      </div>
    );
  }
}

class CustomRulesBuilder extends React.Component {
  static propTypes = {
    description: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.state = {
      keywords: "",
      keywordsList: [],
      operatorsList: [],
      valuesList: [],
      ruleConditions: [],
      helpText: "",
      isSpecialKey: false,
      id: -1,
      step: 0,
      errorMessage: ""
    };
    this.indexCondition = 0;
    this.keywordsFullList = [];
    this.indexKeyword = 0;
    this.firstPartFix = null;
    this.fullOperatorsList = [];
    this.fullValuesList = [];
    this.handleOperatorsClick = this.handleOperatorsClick.bind(this);
    this.handleFiltering = this.handleFiltering.bind(this);
    this.handleKeywordsClick = this.handleKeywordsClick.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleValuesClick = this.handleValuesClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleAutoComplete = this.handleAutoComplete.bind(this);
    this.handleConditionUpdate = this.handleConditionUpdate.bind(this);
    this.handleHideFilteredResults = this.handleHideFilteredResults.bind(this);
    this.getParentsFromKeyword = this.getParentsFromKeyword.bind(this);
    this.getIdFromKeyword = this.getIdFromKeyword.bind(this);
    this.handleRowClick = this.handleRowClick.bind(this);
  }

  UNSAFE_componentWillMount() {
    let rulePart = "";
    rulePart = this.buildChildrenList(this.props.description, "");
    this.setKeywordFullList(rulePart);
    console.log(this.keywordsFullList);
  }

  setKeywordFullList(rulePart, object) {
    if (rulePart !== "" && this.keywordsFullList.indexOf(rulePart) < 0) {
      let name = rulePart.substring(rulePart.lastIndexOf(".") + 1);
      this.keywordsFullList.push({id: this.indexKeyword, keyword: rulePart, name: name, description: object});
      this.indexKeyword++;
    }
  }

  getIdFromKeyword(keyword) {
    let id = -1;
    for (let i = 0; id < 0 && i < this.keywordsFullList.length; i++) {
      if (this.keywordsFullList[i].keyword === keyword) {
        id = this.keywordsFullList[i].id;
      }
    }
    return id;
  }

  buildChildrenList(object, rulePart) {
    for (const property in object) {
      const currentRulePart = (rulePart !== "" ? rulePart + "." + property : property);
      this.setKeywordFullList(currentRulePart, object[property]);
    }

    for (const property in object) {
      if (typeof object[property] === "object" && object[property].tokens !== undefined) {
        let currentRulePart = (rulePart !== "" ? rulePart + "." + property : property);

        currentRulePart = this.buildChildrenList(object[property].tokens, currentRulePart);
        this.setKeywordFullList(currentRulePart, object[property]);
      }
    }

    return "";
  }

  getDataFromKeywordsFullList(ruleParts, property, isFull) {
    let value = null;
    for (let i = 0; value === null && i < this.keywordsFullList.length; i++) {
      if (this.keywordsFullList[i].keyword.trim() === ruleParts[0].trim() && this.keywordsFullList[i].description.operators !== undefined) {
        switch (property) {
        case "id":
          value = this.keywordsFullList[i].id;
          break;
        case "standalone":
          value = this.keywordsFullList[i].description.standalone;
          break;
        case "specialkey":
          value = this.keywordsFullList[i].description.specialKey;
          break;
        case "type":
          for (let j = 0; value === null && j < this.keywordsFullList[i].description.operators.length; j++) {
            if (this.keywordsFullList[i].description.operators[j].name === ruleParts[1].toUpperCase() ||
              (this.keywordsFullList[i].description.operators[j].negation !== undefined &&
                this.keywordsFullList[i].description.operators[j].negation === ruleParts[1].toUpperCase())) {
              value = this.keywordsFullList[i].description.operators[j].type;
            }
          }
          break;
        case "values":
          for (let j = 0; value === null && j < this.keywordsFullList[i].description.operators.length; j++) {
            if (this.keywordsFullList[i].description.operators[j].name === ruleParts[1].toUpperCase() ||
              (this.keywordsFullList[i].description.operators[j].negation !== undefined &&
                this.keywordsFullList[i].description.operators[j].negation === ruleParts[1].toUpperCase())) {
              value = [];
              for (let k = 0; k < this.keywordsFullList[i].description.operators[j].values.length; k++) {
                if (isFull === true || (this.keywordsFullList[i].description.operators[j].values[k] !== ruleParts[2].replaceAll("\"", "").toUpperCase() &&
                  this.keywordsFullList[i].description.operators[j].values[k].startsWith(ruleParts[2].replaceAll("\"", "").toUpperCase()))) {
                  value.push(this.keywordsFullList[i].description.operators[j].values[k]);
                }
              }
            }
          }
          break;
        default:
        }
      }
    }
    return value;
  }

  handleFiltering(event) {
    let keywords = (event !== undefined ? event.target.value : this.state.keywords);
    let operatorsList = [];
    let valuesList = [];
    let isSpecialKey = false;
    const keywordsList = [];
    const ruleParts = keywords.replaceAll("  ", " ").split(" ");
    const step = ruleParts.length;
    switch (step) {
    case 1:
      this.keywordsFullList.map((entry) => {
        if (entry.keyword.startsWith(ruleParts[0])) {
          let pointsInSearchCount = 0;
          for (let j = 0; j < ruleParts[0].length; j++) {
            if (ruleParts[0][j] === ".") {
              pointsInSearchCount++;
            }
          }
          let pointsInListCount = 0;
          for (let j = 0; j < entry.keyword.length; j++) {
            if (entry.keyword[j] === ".") {
              pointsInListCount++;
            }
          }
          if (pointsInSearchCount === pointsInListCount) {
            keywordsList.push(entry);
          }
        }
        return true;
      });
      break;
    case 2:
      isSpecialKey = this.getDataFromKeywordsFullList(ruleParts, "specialkey");
      if (isSpecialKey === true) {
        keywords = ruleParts[0] + " \"" + ruleParts[1].replaceAll("\"", "") + "\" ";
        const event = {
          target: {
            value: keywords
          }
        };
        this.handleFiltering(event);
      } else {
        operatorsList = this.loadOperators(ruleParts, 1, operatorsList);
        if (ruleParts[1].replaceAll("\"", "").trim() === "") {
          this.fullOperatorsList = operatorsList;
        }
        keywords = ruleParts[0] + " " + ruleParts[1].toUpperCase();
      }
      break;
    case 3:
      isSpecialKey = this.getDataFromKeywordsFullList(ruleParts, "specialkey");
      if (isSpecialKey === true) {
        operatorsList = this.loadOperators(ruleParts, 2, operatorsList);
        if (ruleParts[2].replaceAll("\"", "").trim() === "") {
          this.fullOperatorsList = operatorsList;
        }
        keywords = ruleParts[0] + " " + ruleParts[1] + " " + ruleParts[2].toUpperCase();
      } else {
        const type = this.getDataFromKeywordsFullList(ruleParts, "type");
        this.fullOperatorsList = this.loadOperators(ruleParts, 1, operatorsList, true);
        if (type === "list") {
          if (this.firstPartFix === null || this.firstPartFix.toLowerCase().trim() !== ruleParts[0].toLowerCase().trim()) {
            this.firstPartFix = ruleParts[0];
            let tmpFullValuesList = this.getDataFromKeywordsFullList(ruleParts, "values", true);
            if (tmpFullValuesList.length > 0) {
              let i = 0;
              tmpFullValuesList = tmpFullValuesList.map((value) => {
                return (
                  {id: i++, value: value}
                );
              });
            }
            this.fullValuesList = tmpFullValuesList;
          }
          valuesList = this.getDataFromKeywordsFullList(ruleParts, "values");
          if (valuesList.length > 0) {
            let i = 0;
            valuesList = valuesList.map((value) => {
              return (
                {id: i++, value: value}
              );
            });
          }
          keywords = ruleParts[0] + " " + ruleParts[1].toUpperCase() + " \"" + ruleParts[2].replaceAll("\"", "") + "\"";
        }
      }
      break;
    default:
    }
    let state = {};
    if (keywordsList.length > 0) {
      state["keywordsList"] = keywordsList;
      state["helpText"] = keywordsList[0].description.help;
    }
    if (operatorsList.length > 0) {
      state["operatorsList"] = operatorsList;
    }
    if (valuesList.length > 0) {
      state["valuesList"] = valuesList;
    }
    state["keywords"] = keywords;
    state["step"] = step;
    state["isSpecialKey"] = isSpecialKey;
    // console.log(state);
    this.setState(state);
  }

  loadOperators(ruleParts, partIndex, operatorsList, isFull) {
    let id = this.getDataFromKeywordsFullList(ruleParts, "id");
    if (this.keywordsFullList[id] === undefined || this.keywordsFullList[id].description.standalone !== true) {
      return false;
    }
    for (let i = 0, j = 0, name = ""; this.keywordsFullList[id] !== undefined && i < this.keywordsFullList[id].description.operators.length; i++) {
      if (isFull === true ||
        (ruleParts[partIndex].toUpperCase().trim() === "" ||
          this.keywordsFullList[id].description.operators[i].name.toUpperCase().trim().startsWith(ruleParts[partIndex].toUpperCase().trim()))) {
        name = this.keywordsFullList[id].description.operators[i].name;
        operatorsList.push({id: j, name: name, operator: this.keywordsFullList[id].description.operators[i]});
        j++;
      }
      if (isFull === true ||
        ((ruleParts[partIndex].toUpperCase().trim() === "" && this.keywordsFullList[id].description.operators[i].negation !== undefined) ||
          (this.keywordsFullList[id].description.operators[i].negation !== undefined &&
            this.keywordsFullList[id].description.operators[i].negation.toUpperCase().trim().startsWith(ruleParts[partIndex].toUpperCase().trim())))) {
        name = this.keywordsFullList[id].description.operators[i].negation;
        operatorsList.push({id: j, name: name, operator: this.keywordsFullList[id].description.operators[i]});
        j++;
      }
    }
    return operatorsList;
  }

  handleOperatorsClick(name) {
    const ruleParts = this.state.keywords.split(" ");
    let isSpecialKey = this.getDataFromKeywordsFullList(ruleParts, "specialkey");
    const keywords = ruleParts[0] + (isSpecialKey === true ? " " + ruleParts[1] : "") + " " + name + " \"\"";
    this.setKeywords(keywords);
  }

  handleValuesClick(value) {
    const ruleParts = this.state.keywords.split(" ");
    const keywords = ruleParts[0] + " " + ruleParts[1] + " \"" + value + "\"";
    this.setKeywords(keywords, undefined, true);
  }

  handleKeywordsClick(id) {
    const keywords = this.keywordsFullList[id].keyword + (this.keywordsFullList[id].description.tokens !== undefined ? "." : " ");
    this.setKeywords(keywords, id);
  }

  setKeywords(keywords, id, resetValuesList) {
    const event = {
      target: {
        value: keywords
      }
    };
    let objectKeywords = {
      keywords: keywords
    };
    if (id !== undefined) {
      objectKeywords["id"] = id;
    }
    if (resetValuesList === true) {
      objectKeywords["valuesList"] = [];
    }
    this.setState(objectKeywords);
    if (this.state.step > 0) {
      this.handleFiltering(event);
    }
  }

  handleMouseOver(id) {
    this.setState({helpText: this.keywordsFullList[id].description.help});
  }

  handleAutoComplete() {
    const ruleParts = this.state.keywords.split(" ");
    let keywords = null;
    let toAutoComplete = false;
    if (ruleParts.length === 1 && this.state.keywordsList[0] !== undefined) {
      keywords = this.state.keywordsList[0].keyword;
      toAutoComplete = true;
    } else if (this.state.isSpecialKey !== true && ruleParts.length === 2 && this.state.operatorsList[0] !== undefined) {
      keywords = ruleParts[0] + " " + this.state.operatorsList[0].name;
      toAutoComplete = true;
    } else if (this.state.isSpecialKey === true && ruleParts.length === 3 && this.state.operatorsList[0] !== undefined) {
      keywords = ruleParts[0] + " \"" + ruleParts[1].replaceAll("\"", "") + "\" " + this.state.operatorsList[0].name;
      toAutoComplete = true;
    }
    if (toAutoComplete === true) {
      this.setKeywords(keywords);
    }
  }

  handleSubmit() {
    const ruleConditions = this.state.ruleConditions;
    const firstPartKeywords = this.buildRuleConditionFirstPartKeywords();
    const ruleParts = this.state.keywords.split(" ");
    const isStandalone = this.getDataFromKeywordsFullList(ruleParts, "standalone");
    const isSpecialKey = this.getDataFromKeywordsFullList(ruleParts, "specialkey");
    if (isStandalone === true &&
      ((isSpecialKey === true && ruleParts.length === 4 && ruleParts[1].replaceAll("\"", "") !== "" && ruleParts[3].replaceAll("\"", "") !== "") ||
        (isSpecialKey !== true && ruleParts.length === 3 && ruleParts[2].replaceAll("\"", "") !== ""))) {
      const paramName = (isSpecialKey !== true ? null : ruleParts[1].replaceAll("\"", ""));
      const operator = (isSpecialKey !== true ? ruleParts[1] : ruleParts[2]);
      const conditionValue = (isSpecialKey !== true ? ruleParts[2].replaceAll("\"", "") : ruleParts[3].replaceAll("\"", ""));
      let operatorObject = null;
      for (let i = 0; operatorObject === null && i < this.fullOperatorsList.length; i++) {
        if (operator === this.fullOperatorsList[i].name) {
          operatorObject = this.fullOperatorsList[i].operator;
        }
      }
      if (operatorObject !== null) {
        let isConditionValueValid = true;
        if (operatorObject.format !== undefined) {
          const pattern = new RegExp(operatorObject.format);
          if (pattern.test(conditionValue) !== true) {
            isConditionValueValid = false;
          }
        }

        let originalValue = conditionValue;
        if (operatorObject.type === "list") {
          let values = this.fullValuesList.map((valueObject) => {
            return ({original: valueObject.value, compare: valueObject.value.toLowerCase()});
          });
          if (values.map((value) => {
            return value.compare;
          }).indexOf(conditionValue.toLowerCase()) < 0) {
            isConditionValueValid = false;
          } else {
            originalValue = values.filter((value) => {
              if (value.compare === conditionValue.toLowerCase()) {
                return value;
              }
              return null;
            }).map((value) => {
              return value.original;
            });
          }
        }

        const cleanKeywords = ruleParts[0] + (isSpecialKey === true ? " \"" + paramName + "\"" : "") + " " + operator + " \"" + originalValue + "\"";
        let errorMessage = null;
        if (this.state.ruleConditions.map((ruleCondition) => {
          return ruleCondition.condition;
        }).indexOf(cleanKeywords) > -1) {
          isConditionValueValid = false;
          errorMessage = "This condition already exists in this rule.";
        }

        if (isConditionValueValid === true) {
          this.setState({
            ruleConditions: ruleConditions.concat([{
              id: this.indexCondition,
              condition: cleanKeywords,
              firstPartKeywords: firstPartKeywords,
              isSpecialKey: isSpecialKey,
              fullOperatorsList: this.fullOperatorsList,
              paramName: paramName,
              operator: operator,
              conditionValue: originalValue,
              fullValuesList: this.fullValuesList
            }]),
            keywords: "",
            errorMessage: "",
            keywordsList: [],
            operatorsList: [],
            valuesList: [],
            step: 0
          });
          this.firstPartFix = null;
          this.fullOperatorsList = [];
          this.fullValuesList = [];
          this.indexCondition++;
        } else {
          this.setState({
            errorMessage: (errorMessage !== null ? errorMessage : operatorObject.invalidText.replaceAll("{0}", ruleParts[0]))
          });
        }
      }
    } else {
      this.handleAutoComplete();
    }
  }

  buildRuleConditionFirstPartKeywords() {
    const firstParts = this.state.keywords.split(" ")[0].split(".");
    let firstPartsObject = [];
    for (let currentPart="", i=0; i < firstParts.length; i++) {
      currentPart += (currentPart !== "" ? "." : "") + firstParts[i];
      const object = this.keywordsFullList.filter((keywordEntry) => {
        if (keywordEntry.keyword === currentPart) {
          return keywordEntry;
        }
        return null;
      })[0];
      firstPartsObject.push(object);
    }
    return firstPartsObject;
  }

  handleRemove(id) {
    const ruleConditions = this.state.ruleConditions;
    let newConditions = [];
    for (let i=0; i < ruleConditions.length; i++) {
      if (ruleConditions[i].id !== id) {
        newConditions.push({
          id: ruleConditions[i].id,
          condition: ruleConditions[i].condition,
          firstPartKeywords: ruleConditions[i].firstPartKeywords,
          isSpecialKey: ruleConditions[i].isSpecialKey,
          fullOperatorsList: ruleConditions[i].fullOperatorsList,
          paramName: ruleConditions[i].paramName,
          operator: ruleConditions[i].operator,
          conditionValue: ruleConditions[i].conditionValue,
          fullValuesList: ruleConditions[i].fullValuesList
        });
      }
    }
    this.handleConditionUpdate(newConditions);
  }

  handleConditionUpdate(newConditions) {
    // console.log(newConditions);
    this.setState({ruleConditions: newConditions});
  }

  getParentsFromKeyword(keyword) {
    const parentCondition = keyword.substring(0, keyword.lastIndexOf("."));
    let parents = [];
    for (let i=0; parents.length === 0 && i < this.keywordsFullList.length; i++) {
      if (this.keywordsFullList[i].keyword === parentCondition) {
        for (const parent in this.keywordsFullList[i].description.tokens) {
          parents.push({id: this.getIdFromKeyword(parentCondition + "." + parent), name: parent, keyword: parentCondition + "." + parent, description: this.keywordsFullList[i].description.tokens[parent]});
        }
      }
    }
    return parents;
  }

  handleHideFilteredResults() {
    this.setState({step: 0, errorMessage: ""});
  }

  handleRowClick(id) {
    const keywordSelected = this.state.ruleConditions.filter((ruleCondition) => {
      if (ruleCondition.id === id) {
        return ruleCondition;
      }
      return false;
    }).map((ruleCondition) => {
      return ruleCondition.condition;
    })[0];
    this.setKeywords(keywordSelected);
  }

  render() {
    return (
      <div className="custom_rules_builder">
        <SearchBar keywords={this.state.keywords} onChange={this.handleFiltering} onSubmit={this.handleSubmit} onAutoComplete={this.handleAutoComplete} hideFilteredResults={this.handleHideFilteredResults} errorMessage={this.state.errorMessage} />
        <FilteredResults keywordsList={this.state.keywordsList} operatorsList={this.state.operatorsList} valuesList={this.state.valuesList} isSpecialKey={this.state.isSpecialKey} step={this.state.step} helpText={this.state.helpText} onKeywordsClick={this.handleKeywordsClick} onOperatorsClick={this.handleOperatorsClick} onValuesClick={this.handleValuesClick} onMouseOver={this.handleMouseOver} />
        <RuleConditions conditions={this.state.ruleConditions} onConditionUpdate={this.handleConditionUpdate} onRemove={this.handleRemove} getParentsFromKeyword={this.getParentsFromKeyword} getIdFromKeyword={this.getIdFromKeyword} onRowClick={this.handleRowClick} />
      </div>
    );
  }
}

export default CustomRulesBuilder;
