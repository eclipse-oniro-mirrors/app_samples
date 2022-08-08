/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import AbilityStage from '@ohos.application.AbilityStage'
import Logger  from '../../../../../updatedialog/src/main/ets/components/util/Logger'

const TAG: string = 'MyAbilityStage'

export default class MyAbilityStage extends AbilityStage {
  onCreate() {
    Logger.info(TAG, `[Demo] MyAbilityStage onCreate`)
  }
}