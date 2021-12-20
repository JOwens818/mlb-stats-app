import React, {useEffect, useState} from 'react';
import {PictogramItem} from '@carbon/ibmdotcom-react';
import {ListCheckbox, Telecom} from '@carbon/pictograms-react';
import {TextInput, Button, Loading, Tile} from 'carbon-components-react';
import { ArrowRight16 } from '@carbon/icons-react';
import {getPrediction} from '../../services/statservice.js';



const RealTimePredict = () => {

  const [age, setAge] = useState("");
  const [ab, setAb] = useState("");
  const [pa, setPa] = useState("");
  const [hits, setHits] = useState("");
  const [singles, setSingles] = useState("");
  const [doubles, setDoubles] = useState("");
  const [triples, setTriples] = useState("");
  const [hr, setHr] = useState("");
  const [strikeouts, setStrikeouts] = useState("");
  const [bb, setBb] = useState("");
  const [kbb, setKbb] = useState("");
  const [bbperc, setBbPerc] = useState("");
  const [avg, setAvg] = useState("");
  const [slg, setSlg] = useState("");
  const [obp, setObp] = useState("");
  const [ops, setOps] = useState("");
  const [iso, setIso] = useState("");
  const [rbi, setRbi] = useState("");
  const [tb, setTb] = useState("");
  const [abScore, setAbScore] = useState("");
  const [games, setGames] = useState("");
  const [ld, setLd] = useState("");
  const [pop, setPop] = useState("");
  const [dh, setDh] = useState("");

  const [ageIV, setAgeIV] = useState(false);
  const [abIV, setAbIV] = useState(false);
  const [paIV, setPaIV] = useState(false);
  const [hitsIV, setHitsIV] = useState(false);
  const [singlesIV, setSinglesIV] = useState(false);
  const [doublesIV, setDoublesIV] = useState(false);
  const [triplesIV, setTriplesIV] = useState(false);
  const [hrIV, setHrIV] = useState(false);
  const [strikeoutsIV, setStrikeoutsIV] = useState(false);
  const [bbIV, setBbIV] = useState(false);
  const [kbbIV, setKbbIV] = useState(false);
  const [bbpercIV, setBbPercIV] = useState(false);
  const [avgIV, setAvgIV] = useState(false);
  const [slgIV, setSlgIV] = useState(false);
  const [obpIV, setObpIV] = useState(false);
  const [opsIV, setOpsIV] = useState(false);
  const [isoIV, setIsoIV] = useState(false);
  const [rbiIV, setRbiIV] = useState(false);
  const [tbIV, setTbIV] = useState(false);
  const [abScoreIV, setAbScoreIV] = useState(false);
  const [gamesIV, setGamesIV] = useState(false);
  const [ldIV, setLdIV] = useState(false);
  const [popIV, setPopIV] = useState(false);
  const [dhIV, setDhIV] = useState(false);

  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [predictedVal, setPredictedVal] = useState("");
  const [hasError, setHasError] = useState(false);


  const intInputValidation = (val) => {
    if(Object.is(parseInt(val, 10), NaN) || val < 0) 
      return true;
    else
      return false;
  }

  const floatInputValidation = (val) => {
    if(Object.is(parseFloat(val), NaN) || val < 0) 
      return true;
    else
      return false; 
  }

  const onAgeChange = e => {
    setAgeIV(intInputValidation(e.target.value));
    setAge(parseInt(e.target.value, 10));
  }

  const onABChange = e => {
    setAbIV(intInputValidation(e.target.value));
    setAb(parseInt(e.target.value, 10));
  }

  const onPAChange = e => {
    setPaIV(intInputValidation(e.target.value));
    setPa(parseInt(e.target.value, 10));
  }

  const onHitsChange = e => {
    setHitsIV(intInputValidation(e.target.value));
    setHits(parseInt(e.target.value, 10));
  }

  const onSinglesChange = e => {
    setSinglesIV(intInputValidation(e.target.value));
    setSingles(parseInt(e.target.value, 10));
  }

  const onDoublesChange = e => {
    setDoublesIV(intInputValidation(e.target.value));
    setDoubles(parseInt(e.target.value, 10));
  }

  const onTriplesChange = e => {
    setTriplesIV(intInputValidation(e.target.value));
    setTriples(parseInt(e.target.value, 10));
  }

  const onHRChange = e => {
    setHrIV(intInputValidation(e.target.value));
    setHr(parseInt(e.target.value, 10));
  }



  const onKChange = e => {
    setStrikeoutsIV(intInputValidation(e.target.value));
    setStrikeouts(parseInt(e.target.value, 10));
  }

  const onBBChange = e => {
    setBbIV(intInputValidation(e.target.value));
    setBb(parseInt(e.target.value, 10));
  }

  const onKBBChange = e => {
    setKbbIV(floatInputValidation(e.target.value));
    setKbb(parseFloat(e.target.value));
  }

  const onBBPercChange = e => {
    setBbPercIV(floatInputValidation(e.target.value));
    setBbPerc(parseFloat(e.target.value));
  }

  const onAVGChange = e => {
    setAvgIV(floatInputValidation(e.target.value));
    setAvg(parseFloat(e.target.value));
  }

  const onSLGChange = e => {
    setSlgIV(floatInputValidation(e.target.value));
    setSlg(parseFloat(e.target.value));
  }

  const onOBPChange = e => {
    setObpIV(floatInputValidation(e.target.value));
    setObp(parseFloat(e.target.value));
  }

  const onOPSChange = e => {
    setOpsIV(floatInputValidation(e.target.value));
    setOps(parseFloat(e.target.value));
  }




  const onISOChange = e => {
    setIsoIV(floatInputValidation(e.target.value));
    setIso(parseFloat(e.target.value));
  }

  const onRBIChange = e => {
    setRbiIV(intInputValidation(e.target.value));
    setRbi(parseInt(e.target.value, 10));
  }

  const onTBChange = e => {
    setTbIV(intInputValidation(e.target.value));
    setTb(parseInt(e.target.value, 10));
  }

  const onABScoreChange = e => {
    setAbScoreIV(intInputValidation(e.target.value));
    setAbScore(parseInt(e.target.value, 10));
  }

  const onGamesChange = e => {
    setGamesIV(intInputValidation(e.target.value));
    setGames(parseInt(e.target.value, 10));
  }

  const onLDChange = e => {
    setLdIV(intInputValidation(e.target.value));
    setLd(parseInt(e.target.value, 10));
  }

  const onPopChange = e => {
    setPopIV(intInputValidation(e.target.value));
    setPop(parseInt(e.target.value, 10));
  }

  const onDHChange = e => {
    setDhIV(intInputValidation(e.target.value));
    setDh(parseInt(e.target.value, 10));
  }

  const isDataInvalid = () => {
    if (
        ageIV || age === "" ||
        abIV || ab === "" ||
        paIV || pa === "" ||
        hitsIV || hits === "" ||
        singlesIV || singles === "" ||
        doublesIV || doubles === "" ||
        triplesIV || triples === "" ||
        hrIV || hr === "" ||
        strikeoutsIV || strikeouts === "" ||
        bbIV || bb === "" ||
        kbbIV || kbb === "" ||
        bbpercIV || bbperc === "" ||
        avgIV || avg === "" ||
        slgIV || slg === "" ||
        obpIV || obp === "" ||
        opsIV || ops === "" ||
        isoIV || iso === "" ||
        rbiIV || rbi === "" ||
        tbIV || tb === "" ||
        abScoreIV || abScore === "" ||
        gamesIV || games === "" ||
        ldIV || ld === "" ||
        popIV || pop === "" ||
        dhIV || dh === "") 
      return true;
    else
      return false;
  }

  const getPredictedXWOBA = async () => {
    if (isDataInvalid()) {
      alert("Please ensure all input data is valid and complete");
      return;
    }

    const data = {
      "model_type": "prod_model",
      "player_age": age,
      "b_ab": ab,
      "b_total_pa": pa,
      "b_total_hits": hits,
      "b_single": singles,
      "b_double": doubles,
      "b_triple": triples,
      "b_home_run": hr,
      "b_strikeout": strikeouts,
      "b_walk": bb,
      "b_k_percent": kbb,
      "b_bb_percent": bbperc,
      "batting_avg": avg,
      "slg_percent": slg,
      "on_base_percent": obp,
      "on_base_plus_slg": ops,
      "isolated_power": iso,
      "b_rbi": rbi,
      "b_total_bases": tb,
      "b_ab_scoring": abScore,
      "b_game": games,
      "b_hit_line_drive": ld,
      "b_hit_popup": pop,
      "b_played_dh": dh
    };

    console.log(data);
    setLoading(true);
    setShowResults(true);
    const resp = await getPrediction(data);
    hasErrorInResponse(resp);
    setPredictedVal(resp);
    setLoading(false);
  }



  const hasErrorInResponse = (resp) => {
    if (typeof resp === 'undefined' || 'errorMsg' in resp) {
      setHasError(true);
    }
  }



  if (hasError) {
    return (
      <div className='errorMsg'>
        <h1>Oops... Something went wrong</h1>
        <h4>Try refreshing the page or come back later</h4>
      </div>
    );
  }


  return (
    <div className="bx--grid back">
      <div className='bx--row landing-page__r2'>
        <div className='bx--col-sm-4 bx--col-lg-8'>
          <PictogramItem 
            heading="Get Real Time Predictions"
            copy="Enter values below to get a predicted xwOBA from our production model"
            pictogram={{
              src: ListCheckbox
            }}
          />
        </div>
        <div className='bx--col-sm-4 bx--col-lg-8'>
          <PictogramItem 
            heading="Coming Soon"
            copy="Populate fields from actual player data!"
            pictogram={{
              src: Telecom
            }}
          />
        </div>
      </div>

      <div className='bx--row inputRows'>
        <div className='bx--col-sm-1 bx--col-lg-2'>
          <TextInput 
            labelText="Age"
            id="age"
            type="text"
            size="sm"
            invalid={ageIV}
            onChange={onAgeChange}
          />
        </div>
        <div className='bx--col-sm-1 bx--col-lg-2'>
          <TextInput 
            labelText="AB"
            id="ab"
            type="text"
            size="sm"
            invalid={abIV}
            onChange={onABChange}
          />
        </div>
        <div className='bx--col-sm-1 bx--col-lg-2'>
          <TextInput 
            labelText="PA"
            id="pa"
            type="text"
            size="sm"
            invalid={paIV}
            onChange={onPAChange}
          />
        </div>
        <div className='bx--col-sm-1 bx--col-lg-2'>
          <TextInput 
            labelText="H"
            id="hits"
            type="text"
            size="sm"
            invalid={hitsIV}
            onChange={onHitsChange}
          />
        </div>
        <div className='bx--col-sm-1 bx--col-lg-2'>
          <TextInput 
            labelText="1B"
            id="singles"
            type="text"
            size="sm"
            invalid={singlesIV}
            onChange={onSinglesChange}
          />
        </div>
        <div className='bx--col-sm-1 bx--col-lg-2'>
          <TextInput 
            labelText="2B"
            id="doubles"
            type="text"
            size="sm"
            invalid={doublesIV}
            onChange={onDoublesChange}
          />
        </div>
        <div className='bx--col-sm-1 bx--col-lg-2'>
          <TextInput 
            labelText="3B"
            id="triples"
            type="text"
            size="sm"
            invalid={triplesIV}
            onChange={onTriplesChange}
          />
        </div>
        <div className='bx--col-sm-1 bx--col-lg-2'>
          <TextInput 
            labelText="HR"
            id="homeruns"
            type="text"
            size="sm"
            invalid={hrIV}
            onChange={onHRChange}
          />
        </div>
      </div>

      <div className='bx--row inputRows'>
        <div className='bx--col-sm-1 bx--col-lg-2'>
          <TextInput 
            labelText="K"
            id="strikeouts"
            type="text"
            size="sm"
            invalid={strikeoutsIV}
            onChange={onKChange}
          />
        </div>
        <div className='bx--col-sm-1 bx--col-lg-2'>
          <TextInput 
            labelText="BB"
            id="walks"
            type="text"
            size="sm"
            invalid={bbIV}
            onChange={onBBChange}
          />
        </div>
        <div className='bx--col-sm-1 bx--col-lg-2'>
          <TextInput 
            labelText="K %"
            id="k_bb_perc"
            type="text"
            size="sm"
            invalid={kbbIV}
            onChange={onKBBChange}
          />
        </div>
        <div className='bx--col-sm-1 bx--col-lg-2'>
          <TextInput 
            labelText="BB %"
            id="walk_perc"
            type="text"
            size="sm"
            invalid={bbpercIV}
            onChange={onBBPercChange}
          />
        </div>
        <div className='bx--col-sm-1 bx--col-lg-2'>
          <TextInput 
            labelText="AVG"
            id="avg"
            type="text"
            size="sm"
            invalid={avgIV}
            onChange={onAVGChange}
          />
        </div>
        <div className='bx--col-sm-1 bx--col-lg-2'>
          <TextInput 
            labelText="SLG"
            id="slg"
            type="text"
            size="sm"
            invalid={slgIV}
            onChange={onSLGChange}
          />
        </div>
        <div className='bx--col-sm-1 bx--col-lg-2'>
          <TextInput 
            labelText="OBP"
            id="obp"
            type="text"
            size="sm"
            invalid={obpIV}
            onChange={onOBPChange}
          />
        </div>
        <div className='bx--col-sm-1 bx--col-lg-2'>
          <TextInput 
            labelText="OPS"
            id="ops"
            type="text"
            size="sm"
            invalid={opsIV}
            onChange={onOPSChange}
          />
        </div>
      </div>

      <div className='bx--row inputRows'>
        <div className='bx--col-sm-1 bx--col-lg-2'>
          <TextInput 
            labelText="ISO"
            id="iso"
            type="text"
            size="sm"
            invalid={isoIV}
            onChange={onISOChange}
          />
        </div>
        <div className='bx--col-sm-1 bx--col-lg-2'>
          <TextInput 
            labelText="RBI"
            id="rbi"
            type="text"
            size="sm"
            invalid={rbiIV}
            onChange={onRBIChange}
          />
        </div>
        <div className='bx--col-sm-1 bx--col-lg-2'>
          <TextInput 
            labelText="TB"
            id="tb"
            type="text"
            size="sm"
            invalid={tbIV}
            onChange={onTBChange}
          />
        </div>
        <div className='bx--col-sm-1 bx--col-lg-2'>
          <TextInput 
            labelText="AB Score"
            id="ab_scoring"
            type="text"
            size="sm"
            invalid={abScoreIV}
            onChange={onABScoreChange}
          />
        </div>
        <div className='bx--col-sm-1 bx--col-lg-2'>
          <TextInput 
            labelText="G"
            id="games"
            type="text"
            size="sm"
            invalid={gamesIV}
            onChange={onGamesChange}
          />
        </div>
        <div className='bx--col-sm-1 bx--col-lg-2'>
          <TextInput 
            labelText="H-LD"
            id="line_drive"
            type="text"
            size="sm"
            invalid={ldIV}
            onChange={onLDChange}
          />
        </div>
        <div className='bx--col-sm-1 bx--col-lg-2'>
          <TextInput 
            labelText="H-Pop"
            id="pop_up"
            type="text"
            size="sm"
            invalid={popIV}
            onChange={onPopChange}
          />
        </div>
        <div className='bx--col-sm-1 bx--col-lg-2'>
          <TextInput 
            labelText="DH"
            id="played_dh"
            type="text"
            size="sm"
            invalid={dhIV}
            onChange={onDHChange}
          />
        </div>
      </div>

      <div className='bx--row inputRows'>
        <div className='bx--col-lg-3'>
          <Button
            kind="ghost"
            onClick={getPredictedXWOBA}
            renderIcon={ArrowRight16}
            iconDescription='Predict xwOBA'
          >
            Predict xwOBA
          </Button>
        </div>
        {
          (loading && showResults) && 
          <Loading />
        }
        {
          (!loading && showResults) && 
          <div className='bx-col-lg-4'>
            <Tile>Predicted xwOBA: {predictedVal["predicted xwOBA"]}</Tile>
          </div>
        }
        
        
      </div>

    </div>
  );
};

export default RealTimePredict;