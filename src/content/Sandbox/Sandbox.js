import React, {useEffect, useState} from 'react';
import {
  TextInput,
  TextInputSkeleton,
  Button,
  Loading,
  StructuredListBody,
  StructuredListWrapper,
  StructuredListRow,
  StructuredListCell,
  StructuredListHead
} from 'carbon-components-react';
import {getProdModelInfo, getSandboxResults} from '../../services/statservice.js';
import { RequestQuote16 } from '@carbon/icons-react';
import {PictogramItem} from '@carbon/ibmdotcom-react';
import {Research, Telecom} from '@carbon/pictograms-react';


const ModelSandbox = () => {

  const [prodData, setProdData] = useState({});
  const [sandboxData, setSandboxData] = useState({});
  const [prodLoading, setProdLoading] = useState(true);
  const [showSandboxResults, setShowSandboxResuts] = useState(false);
  const [sandboxLoading, setSandboxLoading] = useState(false);

  const [nest, setNest] = useState("");
  const [subsamp, setSubsamp] = useState("");
  const [maxDepth, setMaxDepth] = useState("");
  const [learning, setLearning] = useState("");
  const [gamm, setGamm] = useState("");
  const [regAlpha, setRegAlpha] = useState("");
  const [regLambda, setRegLambda] = useState("");

  const [nestInvalid, setNestInvalid] = useState(false);
  const [subsampInvalid, setSubsampInvalid] = useState(false);
  const [maxDepthInvalid, setMaxDepthInvalid] = useState(false);
  const [learningInvalid, setLearningInvalid] = useState(false);
  const [gammInvalid, setGammInvalid] = useState(false);
  const [regAlphaInvalid, setRegAlphaInvalid] = useState(false);
  const [regLambdaInvalid, setRegLambdaInvalid] = useState(false);



  const onNestChange = e => {
    if(Object.is(parseInt(e.target.value, 10), NaN) || parseInt(e.target.value, 10) < 1) {
      setNestInvalid(true);
    } else {
      setNestInvalid(false);
    }
    setNest(parseInt(e.target.value, 10));
  }

  const onSubsampChange = e => {
    if(Object.is(parseFloat(e.target.value), NaN) || parseFloat(e.target.value) > 1 || parseFloat(e.target.value) < 0) {
      setSubsampInvalid(true);
    } else {
      setSubsampInvalid(false);
    }
    setSubsamp(parseFloat(e.target.value));
  }

  const onMaxDepthChange = e => {
    if(Object.is(parseInt(e.target.value, 10), NaN) || parseInt(e.target.value, 10) < 0) {
      setMaxDepthInvalid(true);
    } else {
      setMaxDepthInvalid(false);
    }
    setMaxDepth(parseInt(e.target.value, 10));
  }

  const onLearningChange = e => {
    if(Object.is(parseFloat(e.target.value), NaN) || parseFloat(e.target.value) > 1 || parseFloat(e.target.value) < 0) {
      setLearningInvalid(true);
    } else {
      setLearningInvalid(false);
    }
    setLearning(parseFloat(e.target.value));
  }

  const onGammaChange = e => {
    if(Object.is(parseInt(e.target.value, 10), NaN) || parseInt(e.target.value, 10) < 0) {
      setGammInvalid(true);
    } else {
      setGammInvalid(false);
    }
    setGamm(parseInt(e.target.value, 10));
  }

  const onRegAlphaChange = e => {
    if(Object.is(parseInt(e.target.value, 10), NaN) || parseInt(e.target.value, 10) < 0) {
      setRegAlphaInvalid(true);
    } else {
      setRegAlphaInvalid(false);
    }
    setRegAlpha(parseInt(e.target.value, 10));
  }

  const onRegLambdaChange = e => {
    if(Object.is(parseInt(e.target.value, 10), NaN) || parseInt(e.target.value, 10) < 0) {
      setRegLambdaInvalid(true);
    } else {
      setRegLambdaInvalid(false);
    }
    setRegLambda(parseInt(e.target.value, 10));
  }

  const checkAllInputs = () => {

    if(nestInvalid || nest === "" || 
      subsampInvalid || subsamp === "" || 
      maxDepthInvalid || maxDepth === "" || 
      learningInvalid || learning === "" || 
      gammInvalid || gamm === "" ||
      regAlphaInvalid || regAlpha === "" || 
      regLambdaInvalid || regLambda === "")
      return false;
    else
      return true;
  }


  const getProdModelData = async () => {

    setProdLoading(true);
    const resp = await getProdModelInfo();
    setProdData(resp[0]);
    setProdLoading(false);
  }

  const runSandboxModel = async () => {
    if (!checkAllInputs()) {
      alert("Please ensure all input data is valid and complete");
      return;
    }

    setSandboxLoading(true);
    setShowSandboxResuts(true);
    const resp = await getSandboxResults(nest, subsamp, maxDepth, learning, gamm, regAlpha,regLambda)
    setSandboxData(resp);
    setSandboxLoading(false);
  }


  useEffect(() => {
    getProdModelData();
  }, []);


  return (
    <div className="bx--grid back">
      <div className='bx--row landing-page__r2'>
        <div className='bx--col-sm-4 bx--col-lg-8'>
          <PictogramItem 
            heading="Create New Models"
            copy="Tune hyper parameters and compare your model's scores to production"
            pictogram={{
              src: Research
            }}
          />
        </div>
        <div className='bx--col-sm-4 bx--col-lg-8'>
          <PictogramItem 
            heading="Coming Soon"
            copy="Deploy your proposed model to the production environment!"
            pictogram={{
              src: Telecom
            }}
          />
        </div>
      </div>
        {
          prodLoading && 
          <div className='bx--row inputRows'>
            <div className='bx--col-sm-1 bx--col-lg-2 bx--offset-lg-2'>
              <TextInputSkeleton />
            </div>
            <div className='bx--col-sm-1 bx--col-lg-2'>
              <TextInputSkeleton />
            </div>
            <div className='bx--col-sm-1 bx--col-lg-2'>
              <TextInputSkeleton />
            </div>
            <div className='bx--col-sm-1 bx--col-lg-2'>
             <TextInputSkeleton />
            </div>
            <div className='bx--col-sm-1 bx--col-lg-2'>
              <TextInputSkeleton />
            </div>
            <div className='bx--col-sm-1 bx--col-lg-2'>
              <TextInputSkeleton />
            </div>
            <div className='bx--col-sm-1 bx--col-lg-2'>
              <TextInputSkeleton />
            </div>
          </div>
        }
        {
          !prodLoading && 
           <>
            {/* Prod Model Data */}
            <div className='bx--row inputRows'>
              <div className='bx--col-lg-2'>
                <h4>Production</h4>
              </div>
              <div className='bx--col-sm-1 bx--col-lg-2'>
                <TextInput 
                  labelText="n_estimators"
                  id="n-estimators"
                  type="text"
                  size="sm"
                  disabled
                  value={prodData["n_estimators"]}
                />
              </div>
              <div className='bx--col-sm-1 bx--col-lg-2'>
                <TextInput 
                  labelText="subsample"
                  id="subsample"
                  type="text"
                  size="sm"
                  disabled
                  value={prodData["subsample"]}
                />
              </div>
              <div className='bx--col-sm-1 bx--col-lg-2'>
                <TextInput 
                  labelText="max_depth"
                  id="max_depth"
                  type="text"
                  size="sm"
                  disabled
                  value={prodData["max_depth"]}
                />
              </div>
              <div className='bx--col-sm-1 bx--col-lg-2'>
                <TextInput 
                  labelText="learning_rate"
                  id="learning_rate"
                  type="text"
                  size="sm"
                  disabled
                  value={prodData["learning_rate"]}
                />
              </div>
              <div className='bx--col-sm-1 bx--col-lg-2'>
                <TextInput 
                  labelText="gamma"
                  id="gamma"
                  type="text"
                  size="sm"
                  disabled
                  value={prodData["gamma"]}
                />
              </div>
              <div className='bx--col-sm-1 bx--col-lg-2'>
                <TextInput 
                  labelText="reg_alpha"
                  id="reg_alpha"
                  type="text"
                  size="sm"
                  disabled
                  value={prodData["reg_alpha"]}
                />
              </div>
              <div className='bx--col-sm-1 bx--col-lg-2'>
                <TextInput 
                  labelText="reg_lambda"
                  id="reg_lambda"
                  type="text"
                  size="sm"
                  disabled
                  value={prodData["reg_lambda"]}
                />
              </div>
            </div>

            {/* Proposed Sandbox Data */}
            <div className='bx--row inputRows'>
              <div className='bx--col-lg-2'>
                <h4>Proposed</h4>
              </div>
              <div className='bx--col-sm-1 bx--col-lg-2'>
                <TextInput 
                  labelText="n_estimators"
                  id="sand_n-estimators"
                  type="text"
                  size="sm"
                  onChange={onNestChange}
                  invalid={nestInvalid}
                  invalidText="Must be an integer value greater than 1"
                />
              </div>
              <div className='bx--col-sm-1 bx--col-lg-2'>
                <TextInput 
                  labelText="subsample"
                  id="sand_subsample"
                  type="text"
                  size="sm"
                  onChange={onSubsampChange}
                  invalid={subsampInvalid}
                  invalidText="Must be an value between 0 and 1"
                />
              </div>
              <div className='bx--col-sm-1 bx--col-lg-2'>
                <TextInput 
                  labelText="max_depth"
                  id="sand_max_depth"
                  type="text"
                  size="sm"
                  onChange={onMaxDepthChange}
                  invalid={maxDepthInvalid}
                  invalidText="Must be an integer value greater than 0"
                />
              </div>
              <div className='bx--col-sm-1 bx--col-lg-2'>
                <TextInput 
                  labelText="learning_rate"
                  id="sand_learning_rate"
                  type="text"
                  size="sm"
                  onChange={onLearningChange}
                  invalid={learningInvalid}
                  invalidText="Must be an value between 0 and 1"
                />
              </div>
              <div className='bx--col-sm-1 bx--col-lg-2'>
                <TextInput 
                  labelText="gamma"
                  id="sand_gamma"
                  type="text"
                  size="sm"
                  onChange={onGammaChange}
                  invalid={gammInvalid}
                  invalidText="Must be an integer value greater than 0"
                />
              </div>
              <div className='bx--col-sm-1 bx--col-lg-2'>
                <TextInput 
                  labelText="reg_alpha"
                  id="sand_reg_alpha"
                  type="text"
                  size="sm"
                  onChange={onRegAlphaChange}
                  invalid={regAlphaInvalid}
                  invalidText="Must be an integer value greater than 0"
                />
              </div>
              <div className='bx--col-sm-1 bx--col-lg-2'>
                <TextInput 
                  labelText="reg_lambda"
                  id="sand_reg_lambda"
                  type="text"
                  size="sm"
                  onChange={onRegLambdaChange}
                  invalid={regLambdaInvalid}
                  invalidText="Must be an integer value greater than 0"
                />
              </div>
            </div>
            <div className='bx--row inputRows'>
              <div className='bx--col-lg-3 bx--offset-lg-13'>
                <Button
                  kind="ghost"
                  onClick={runSandboxModel}
                  renderIcon={RequestQuote16}
                  iconDescription='Compare Models'
                >
                  Compare Models
                </Button>
              </div>
            </div>
          </>
        }
        {
          (sandboxLoading && showSandboxResults) && 
          <>
            <Loading />
          </>
        }
        {
          (showSandboxResults && !sandboxLoading) && 
          <>
            <div className='bx--row inputRows'>
              <StructuredListWrapper>
                <StructuredListHead>
                  <StructuredListRow head>
                    <StructuredListCell head>Model</StructuredListCell>
                    <StructuredListCell head>Training Score</StructuredListCell>
                    <StructuredListCell head>Mean Cross Validation</StructuredListCell>
                    <StructuredListCell head>K-Fold Cross Validation</StructuredListCell>
                    <StructuredListCell head>Mean Squered Error</StructuredListCell>
                    <StructuredListCell head>R Squared</StructuredListCell>
                    <StructuredListCell head>Explained Variance</StructuredListCell>
                  </StructuredListRow>
                </StructuredListHead>
                <StructuredListBody>
                  <StructuredListRow>
                    <StructuredListCell>Production Model</StructuredListCell>
                    <StructuredListCell>{prodData["training"]}</StructuredListCell>
                    <StructuredListCell>{prodData["mean_cv"]}</StructuredListCell>
                    <StructuredListCell>{prodData["kfold_cv_avg"]}</StructuredListCell>
                    <StructuredListCell>{prodData["mse"]}</StructuredListCell>
                    <StructuredListCell>{prodData["rsquared"]}</StructuredListCell>
                    <StructuredListCell>{prodData["explained_var"]}</StructuredListCell>
                  </StructuredListRow>
                  <StructuredListRow>
                    <StructuredListCell>Proposed Model</StructuredListCell>
                    <StructuredListCell>{sandboxData["training"]}</StructuredListCell>
                    <StructuredListCell>{sandboxData["mean_cv"]}</StructuredListCell>
                    <StructuredListCell>{sandboxData["kfold_cv_avg"]}</StructuredListCell>
                    <StructuredListCell>{sandboxData["mse"]}</StructuredListCell>
                    <StructuredListCell>{sandboxData["rsquared"]}</StructuredListCell>
                    <StructuredListCell>{sandboxData["explained_var"]}</StructuredListCell>
                  </StructuredListRow>
                </StructuredListBody>
              </StructuredListWrapper>
            </div>
          </>
        }
      
    </div>
  );

};

export default ModelSandbox;