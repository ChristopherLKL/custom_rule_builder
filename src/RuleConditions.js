import React from 'react';
import './RuleConditions.css';

class ConditionRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.condition.id
    };
    this.handleParamNameChange = this.handleParamNameChange.bind(this);
    this.handleConditionValueChange = this.handleConditionValueChange.bind(this);
  }

  handleParamNameChange(e) {
    this.props.onParamNameChange(this.state.id, e.target.value);
  }

  handleConditionValueChange(e) {
    this.props.onConditionValueChange(this.state.id, e.target.value);
  }

  render() {
    return (
      <tbody className="condition_row">
        <tr>
          <td align="right">
            {this.props.condition.firstPartKeywords.map((object) => {
              return (
                <button className="keyword_button" key={object.id} onClick={(keyword, id) => this.props.onFirstPartKeywordClick(object.keyword, this.props.condition.id)}>{object.name}</button>
              );
            })}
            {this.props.condition.isSpecialKey && <input className="param_field" type="text" value={this.props.condition.paramName} onChange={this.handleParamNameChange} />}
          </td>
          <td width="90px">
            {this.props.condition.operator && <button className="operator_button" key={this.props.condition.operator} onClick={(operatorsList, id) => this.props.onOperatorClick(this.props.condition.fullOperatorsList, this.props.condition.id)}>{this.props.condition.operator}</button>}
          </td>
          <td align="left">
            {this.props.condition.conditionValue !== null && <input onFocus={(id) => this.props.onRowClick(this.props.condition.id)} className="value_field" type="text" value={this.props.condition.conditionValue} onChange={this.handleConditionValueChange} />}
          </td>
          <td align="right">
            <button className="remove_button" onClick={(id) => this.props.onRemove(this.props.condition.id)}>Remove</button>
          </td>
        </tr>
        <tr>
          <td colSpan="6">
            {this.props.idEdited === this.props.condition.id &&
              <ConditionEditRow id={this.props.condition.id} entity={this.props.entity} list={this.props.list} onEntityClick={this.props.onEntityClick} />
            }
          </td>
        </tr>
      </tbody>
    );
  }
}

function ConditionEditRow(props) {
  return (
    <div className="condition_edit_row">
    {props.list && props.list.map((item) => {
      return (
        <div key={item.id}>
          <button onClick={(entity, name, id) => props.onEntityClick(props.entity, item.name, props.id, item)}>{item.name}</button>
        </div>
      );
    })}
    </div>
  );
}

class RuleConditions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idEdited: -1,
      entity: "",
      list: []
    };
    this.handleOperatorClick = this.handleOperatorClick.bind(this);
    this.handleFirstPartKeywordClick = this.handleFirstPartKeywordClick.bind(this);
    this.handleEntityClick = this.handleEntityClick.bind(this);
    this.handleParamNameChange = this.handleParamNameChange.bind(this);
    this.handleConditionValueChange = this.handleConditionValueChange.bind(this);
  }

  handleParamNameChange(id, paramName) {
    const ruleConditions = this.props.conditions;
    let newConditions = [];
    for(let i=0; i < ruleConditions.length; i++) {
      if(ruleConditions[i].id === id && ruleConditions[i].isSpecialKey === true) {
        const conditionParts = ruleConditions[i].condition.split(" ");
        let condition = conditionParts[0];
        condition += " \"" + paramName + "\" " + (conditionParts[2] !== undefined ? conditionParts[2].toUpperCase() : "") + " \"" + (conditionParts[3] !== undefined ? conditionParts[3].replaceAll("\"", "") : "") + "\"";
        ruleConditions[i].condition = condition;
        ruleConditions[i].paramName = paramName;
      }
      newConditions.push(ruleConditions[i]);
    }
//    console.log(newConditions);
    this.props.onConditionUpdate(newConditions);
  }

  handleConditionValueChange(id, conditionValue) {
    const ruleConditions = this.props.conditions;
    let newConditions = [];
    for(let i=0; i < ruleConditions.length; i++) {
      if(ruleConditions[i].id === id) {
        const conditionParts = ruleConditions[i].condition.split(" ");
        let condition = conditionParts[0];
        if(ruleConditions[i].isSpecialKey === true) {
          condition += " \"" + (conditionParts[1] !== undefined ? conditionParts[1].replaceAll("\"", "") : "") + "\" " + (conditionParts[2] !== undefined ? conditionParts[2].toUpperCase() : "") + " \"" + conditionValue.replaceAll("\"", "") + "\"";
        } else {
          condition += " " + (conditionParts[1] !== undefined ? conditionParts[1].toUpperCase() : "") + " \"" + conditionValue.replaceAll("\"", "") + "\"";
        }
        ruleConditions[i].condition = condition;
        ruleConditions[i].conditionValue = conditionValue;
      }
      newConditions.push(ruleConditions[i]);
    }
//    console.log(newConditions);
    this.props.onConditionUpdate(newConditions);
  }

  handleFirstPartKeywordClick(object, id) {
    const parents = this.props.getParentsFromKeyword(object);
    this.setState({entity: "firstPartKeyword", list: parents, idEdited: id});
  }

  handleOperatorClick(operatorsList, id) {
    this.setState({entity: "operator", list: operatorsList, idEdited: id});
  }

  handleEntityClick(entity, name, id, object) {
    if(entity === "operator") {
      const ruleConditions = this.props.conditions;
      let newConditions = [];
      for(let i=0; i < ruleConditions.length; i++) {
        if(ruleConditions[i].id === id) {
          const conditionParts = ruleConditions[i].condition.split(" ");
          let condition = conditionParts[0];
          if(ruleConditions[i].isSpecialKey === true) {
            condition += " \"" + (conditionParts[1] !== undefined ? conditionParts[1].replaceAll("\"", "") : "") + "\" " + name + " \"" + (conditionParts[3] !== undefined ? conditionParts[3].replaceAll("\"", "") : "") + "\"";
          } else {
            condition += " " + name + " \"" + (conditionParts[2] !== undefined ? conditionParts[2].replaceAll("\"", "") : "") + "\"";
          }
          ruleConditions[i].condition = condition;
          ruleConditions[i].operator = name;
        }
        newConditions.push(ruleConditions[i]);
      }
//      console.log(newConditions);
      this.props.onConditionUpdate(newConditions);
    } else if(entity === "firstPartKeyword") {
      const ruleConditions = this.props.conditions;
      const newSubKeywords = object.keyword.split(".");
      let newConditions = [];
      for(let i=0; i < ruleConditions.length; i++) {
        if(ruleConditions[i].id === id) {
          let newFirstPartKeywords = [];
          let stopAddingKeyword = false;
          for(let j = 0; stopAddingKeyword !== true && j < ruleConditions[i].firstPartKeywords.length; j++) {
            const originalSubKeywords = ruleConditions[i].firstPartKeywords[j].keyword.split(".");
            let newFirstPartKeyword = null;
            let nextFirstPartKeyword = null;
            if(newSubKeywords.length === originalSubKeywords.length) {
              stopAddingKeyword = true;
              newFirstPartKeyword = {
                id: this.props.getIdFromKeyword(object.keyword),
                keyword: object.keyword,
                name: object.name,
                description: object.description
              };
              if(object.isSpecialKey === true) {
                ruleConditions[i].paramName = "";
              } else {
                ruleConditions[i].paramName = null;
              }
              if(object.description.standalone === true) {
                ruleConditions[i].fullOperatorsList = [];
                for(let k = 0, j = 0, name = ""; k < object.description.operators.length; k++) {
                  name = object.description.operators[k].name;
                  ruleConditions[i].fullOperatorsList.push({id: j, name: name, operator: object.description.operators[k]});
                  j++;
                  if(object.description.operators[k].negation !== undefined) {
                    name = object.description.operators[k].negation;
                    ruleConditions[i].fullOperatorsList.push({id: j, name: name, operator: object.description.operators[k]});
                    j++;
                  }
                }
                ruleConditions[i].operator = ruleConditions[i].fullOperatorsList[0].name;
                ruleConditions[i].conditionValue = "";
              } else {
                let firstNextKeywordPartKeyword = null;
                let name = null;
                for(let property in object.description.tokens) {
                  if(firstNextKeywordPartKeyword === null) {
                    name = property;
                    firstNextKeywordPartKeyword = object.description.tokens[property];
                  }
                }
                
                nextFirstPartKeyword = {
                  id: this.props.getIdFromKeyword(object.keyword + "." + name),
                  keyword: object.keyword + "." + name,
                  name: name,
                  description: firstNextKeywordPartKeyword
                };
                
                ruleConditions[i].fullOperatorsList = [];
                ruleConditions[i].operator = null;
                ruleConditions[i].conditionValue = null;
              }
            }
            newFirstPartKeywords.push(newFirstPartKeyword !== null ? newFirstPartKeyword : ruleConditions[i].firstPartKeywords[j]);
            if(nextFirstPartKeyword !== null) {
              newFirstPartKeywords.push(nextFirstPartKeyword);
            }
          }
          ruleConditions[i].condition = object.keyword;
          ruleConditions[i].firstPartKeywords = newFirstPartKeywords;
          ruleConditions[i].isSpecialKey = object.isSpecialKey;
          ruleConditions[i].fullValuesList = null;
//          console.log(ruleConditions[i]);
        }
        newConditions.push(ruleConditions[i]);
      }
      this.props.onConditionUpdate(newConditions);
    }
    this.setState({entity: "", list: [], idEdited: -1});
  }

  render() {
    return (
      <table className="rule_conditions">
        {this.props.conditions && this.props.conditions.map((ruleCondition) => {
          return (
            <ConditionRow key={ruleCondition.id} idEdited={this.state.idEdited} condition={ruleCondition} entity={this.state.entity} list={this.state.list} onFirstPartKeywordClick={this.handleFirstPartKeywordClick} onOperatorClick={this.handleOperatorClick} onEntityClick={this.handleEntityClick} onParamNameChange={this.handleParamNameChange} onConditionValueChange={this.handleConditionValueChange} onRowClick={this.props.onRowClick} onRemove={this.props.onRemove} />
          );
        })}
      </table>
    );
  }
}

export default RuleConditions;
