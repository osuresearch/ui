# [5.0.0-beta.2](https://github.com/osuresearch/ui/compare/v5.0.0-beta.1...v5.0.0-beta.2) (2023-07-28)


### Bug Fixes

* clipping issues for focus indicators on multiple components ([9a1ab32](https://github.com/osuresearch/ui/commit/9a1ab3231f4c483ad0a6a94b8da3b46814fd9812))
* **FormField:** propagate error state down to MUI ([e937cec](https://github.com/osuresearch/ui/commit/e937cec42bbe823b1f85ed3934eb97207fd0ef1b))
* **OhioStateNavbar:** links are not typed ([d3956f5](https://github.com/osuresearch/ui/commit/d3956f5b7bd69549d7840acb2ec6f58528427501))


### Features

* add new `Admonition` ([d12e953](https://github.com/osuresearch/ui/commit/d12e95388ed47692c0249e4042a614f86c26ca95))
* add the full brand color palette ([1f96f93](https://github.com/osuresearch/ui/commit/1f96f938c51f08fb7970dd0908e4aa654859e055))
* refactor Ohio State brand components into MUI ([4016acc](https://github.com/osuresearch/ui/commit/4016accdd2bed7f851c717351cee0f4970298fc9))
* **TextField:** add `autoFocus` and `type` props ([ba8d953](https://github.com/osuresearch/ui/commit/ba8d953b23884d934e2bd9d643c26ed3c6ac4291))

# [5.0.0-beta.1](https://github.com/osuresearch/ui/compare/v4.8.0...v5.0.0-beta.1) (2023-07-26)

### BREAKING CHANGES

* Dropped use of TailwindCSS in favor of Material UI 5. This removes redundant components (Box, Stack, Text, etc) and introduces a TSS styling system to replace the previous CSS bundling. Form components have been refactored to take advantage of new MUI base fields and several components have been introduced to wrap MUI components to be always-accessible. Components that are not an immediate need for the Office of Research applications (e.g. Interview, Listicle) have been dropped from the beta. ([54efe9f](https://github.com/osuresearch/ui/commit/54efe9f15eb6bd3c29b0805ce127e76d96d8b579))


# [5.0.0-alpha.23](https://github.com/osuresearch/ui/compare/v5.0.0-alpha.22...v5.0.0-alpha.23) (2023-07-07)


### Features

* add `Prose` component that applies Tailwind Typography to content ([14e6cbf](https://github.com/osuresearch/ui/commit/14e6cbfc21ab759b11889a6deca2754c7ae4f637))
* **Admonition:** add style system prop support ([ed8318f](https://github.com/osuresearch/ui/commit/ed8318ffd2b6ec18436cb5be5518998d27d5fcb9))

# [5.0.0-alpha.22](https://github.com/osuresearch/ui/compare/v5.0.0-alpha.21...v5.0.0-alpha.22) (2023-05-28)


### Bug Fixes

* **ComboBoxField:** use string over key for value types ([be0c34a](https://github.com/osuresearch/ui/commit/be0c34a920caaddb30f9c2eddc2ea47e03da1082))
* **docs:** add forced rerender of uncontrolled form components for a form's `onReset` ([753b53f](https://github.com/osuresearch/ui/commit/753b53f8b1b4766fdd2ca8b13d086a780faa4659)), closes [#59](https://github.com/osuresearch/ui/issues/59)
* **Icon:** `aria-label` not propagating down to the DOM attributes ([14aacfa](https://github.com/osuresearch/ui/commit/14aacfaa775a5465b9da9ac4d3709fd32a35a865))
* **NumberField:** use larger click areas for increment/decrement buttons ([0f42e9b](https://github.com/osuresearch/ui/commit/0f42e9b9dfea2bfb17c5bcb6eae402fcd16f303d))
* polymorphics incompatible with components with `as` props ([4536326](https://github.com/osuresearch/ui/commit/45363260d9e051ffab3bbbb948fe0df5f92d1ff6)), closes [#83](https://github.com/osuresearch/ui/issues/83)
* **ProgressBar:** incompatibility with React Aria upgrade ([9502118](https://github.com/osuresearch/ui/commit/9502118979be2c3b89e060da15dd237deffa0c61))
* **RadioIcon:** `className` causes built-in styles to be dropped ([80bde26](https://github.com/osuresearch/ui/commit/80bde26241517dd3f2d26e4c7245bc105dbc1b23))
* **SelectField:** disabled state not propagated down to the `Interactive` ([37665be](https://github.com/osuresearch/ui/commit/37665be5f5a9aeaf83b972e205c3c27ab16f4012))
* state not correctly passed down for checkbox and radio sets ([7d30870](https://github.com/osuresearch/ui/commit/7d30870461829d83073674ae2d2353f83be607d1)), closes [#50](https://github.com/osuresearch/ui/issues/50)
* **SwitchIcon:** `className` causes built-in styles to be dropped ([02ffb50](https://github.com/osuresearch/ui/commit/02ffb50b7b09c0166e94325d160b0e17fd26c89c))


### Features

* add `LazyLoaded` component from UI 4 ([061c69e](https://github.com/osuresearch/ui/commit/061c69e169198d60e83cca0069476ed63a6e0928))
* add `SplitButton` component ([26379ff](https://github.com/osuresearch/ui/commit/26379ff84b1782f65c3124f579d588d87b3d3bfb))
* add more flexible `MenuButton` component to replace old `Menu` ([67dd24d](https://github.com/osuresearch/ui/commit/67dd24d37fbf23b9915827e3baa75cf3c20fff09))

# [5.0.0-alpha.21](https://github.com/osuresearch/ui/compare/v5.0.0-alpha.20...v5.0.0-alpha.21) (2023-05-25)


### Bug Fixes

* **Arrow:** alignment issue in tooltips ([7f5de3e](https://github.com/osuresearch/ui/commit/7f5de3ec11d6f4bd3f96478ccd721b0de82d31e8))
* **DateField:** change exposed form field type from `DateValue` to `string` ([2f628c5](https://github.com/osuresearch/ui/commit/2f628c599d687e6a717fe4419d81cc1bb4abef42)), closes [#66](https://github.com/osuresearch/ui/issues/66)
* **NumberField:** reference to missing component ([2a799bf](https://github.com/osuresearch/ui/commit/2a799bf8291008676d562af1ad962f4e6c8d4ff9))
* **PaginationButtons:** prev/next buttons do not disable when on the first/last page ([c839bdf](https://github.com/osuresearch/ui/commit/c839bdfab542799028c0bedd22ad3ef7fb945e2e))
* remove BackToTop and Markdown components. Neither were fully implemented ([d21fa93](https://github.com/osuresearch/ui/commit/d21fa93fe266e247108d88483237e6ce0d0f05e3))
* remove unneeded dependency on react-transition-group ([68e6f61](https://github.com/osuresearch/ui/commit/68e6f6106b8849cb3c62750d033e84c3244565e3))
* rename all slot props to have a `render` prefix to improve compatibility with the eslint rule `react/no-unstable-nested-components` ([924de55](https://github.com/osuresearch/ui/commit/924de55efe3bf222b23e4e13e88cb7ab72aa96b0))
* rename LinkButton to TextLink to conform to BUX's conventions ([b09aff9](https://github.com/osuresearch/ui/commit/b09aff9ea6c859f087f35ecdf59740129b647ca0))
* **SelectField:** missing chevron icon ([3d2b96a](https://github.com/osuresearch/ui/commit/3d2b96ade78bebb2a3844211ee5fd11bd6821ed2))
* **UnstyledButton:** block usage of native `onClick` to force developers to use `onPress` for better a11y ([974222b](https://github.com/osuresearch/ui/commit/974222bffb098a10030e321909fb14aa9e8f2c80))


### Features

* add `SliderField` component ([7f83742](https://github.com/osuresearch/ui/commit/7f837429959c7a641527c9a4e3581f07713d5616))
* add DateRangeField ([1a5c7e9](https://github.com/osuresearch/ui/commit/1a5c7e9e6b2b4f2d4b46d75f38eec0448a653b79)), closes [#70](https://github.com/osuresearch/ui/issues/70)
* add new `Interactive` base component for handling all stateful styling of interactive fields (inputs, selects, etc) ([146b060](https://github.com/osuresearch/ui/commit/146b060389832fc73ed4c8de77e58716c99f35c7))
* add PaginationButtons components ([c0dfa4a](https://github.com/osuresearch/ui/commit/c0dfa4a70f66c45acf2ec05c0bc37a46698572cb)), closes [#78](https://github.com/osuresearch/ui/issues/78)
* add source files to distribution bundle ([8a271ac](https://github.com/osuresearch/ui/commit/8a271acc54c6bcdade8f601087715dcbbaf2cc3c))
* add Tailwind preset for apps that use their own Tailwind runtimes may include and extend RUI's config ([b395c49](https://github.com/osuresearch/ui/commit/b395c497e836192efc9699c365b076f5ef26a755))
* switch to newer, more consistent, semantics for color tokens ([8f4df30](https://github.com/osuresearch/ui/commit/8f4df30904ce89edce3fb3f9ae83dc962d948bca))

# [5.0.0-alpha.20](https://github.com/osuresearch/ui/compare/v5.0.0-alpha.19...v5.0.0-alpha.20) (2023-04-27)


### Bug Fixes

* **SelectField:** add check for the placeholder prop ([9a7b2cb](https://github.com/osuresearch/ui/commit/9a7b2cb0b84d94ee06b801536c987ae377d0130e))

# [5.0.0-alpha.19](https://github.com/osuresearch/ui/compare/v5.0.0-alpha.18...v5.0.0-alpha.19) (2023-04-26)


### Bug Fixes

* add missing export of `Lookup` ([405eee2](https://github.com/osuresearch/ui/commit/405eee2ff5e19d1e070828dae2bfba0554feda06))
* duplicate `LookupOption` type export ([4f62373](https://github.com/osuresearch/ui/commit/4f62373836f228c797cfc4ac72f836454f3efa82))

# [5.0.0-alpha.18](https://github.com/osuresearch/ui/compare/v5.0.0-alpha.17...v5.0.0-alpha.18) (2023-04-23)


### Bug Fixes

* add missing `useDebouncedState` hook export ([948ffe6](https://github.com/osuresearch/ui/commit/948ffe6ac93e7e163d5af6f77d3ef9d0eb3f0b0c))
* add missing `useStyleSystemProps` export ([4aa8316](https://github.com/osuresearch/ui/commit/4aa8316a6d9350b6aa26f09b673ad171a3b5347c))
* **CheckboxSetField:** detect change to `undefined` while in controlled mode ([8c02dfc](https://github.com/osuresearch/ui/commit/8c02dfcf56d83c7855e161756433c3461094e4ca))
* **ComboBoxField:** add missing label to inner list ([08324f7](https://github.com/osuresearch/ui/commit/08324f73931599e5d200117bb418e2f45e7ae1b2))
* **DateField:** low text contrast ([0a1285d](https://github.com/osuresearch/ui/commit/0a1285d61d376d785a2136ae3bdb1e6761bea9a9))
* **FormErrors:** compatibility with RHF 7 ([cc964d9](https://github.com/osuresearch/ui/commit/cc964d944f8b5d88b8f36dbed00cd2831211964b)), closes [#58](https://github.com/osuresearch/ui/issues/58)
* **FormField:** do not render label element when using `aria-label` ([79ae72f](https://github.com/osuresearch/ui/commit/79ae72fe11db66de00ea23159ce0ffb0c0cd6b7d)), closes [#67](https://github.com/osuresearch/ui/issues/67)
* hide default buttons on webkit browers for `input[type="search"]` ([c4ff676](https://github.com/osuresearch/ui/commit/c4ff6765b3db77e6244675fdc89d4e69382f6456))
* **Icon:** `style` prop should not be passed down to inner component ([c98f338](https://github.com/osuresearch/ui/commit/c98f338ec899dff9dc6dc15bde371f6261da7d31))
* incorrect type for `overlayProps` in Modal and Popover ([352157c](https://github.com/osuresearch/ui/commit/352157c54a6765bfe5d2bae3a742aa9e68c260c7))
* **mergeProps:** type conflict for newer TS ([782c7e4](https://github.com/osuresearch/ui/commit/782c7e4b338eeaf4866e1df7a9d6859f847b412c))
* **RadioSetField:** detect change to `undefined` while in controlled mode ([02d0469](https://github.com/osuresearch/ui/commit/02d0469642e8ecdf379ed78b4afae36f7c50bc50))
* **useRUIForm:** use correct type for `onBlur` ([a6199df](https://github.com/osuresearch/ui/commit/a6199df449f8a3e6f031bfc2e87830576d9c56bd)), closes [#69](https://github.com/osuresearch/ui/issues/69)


### Features

* add new LookupField that supports any object shape ([06e8fea](https://github.com/osuresearch/ui/commit/06e8fea53d1915461e18217d70aed9e9b7aa129d))
* **ListBox:** add style system control props to the parent and all items ([48bff36](https://github.com/osuresearch/ui/commit/48bff3688ca96731362e0ebc0b7c6d063fbf40c9))

# [5.0.0-alpha.17](https://github.com/osuresearch/ui/compare/v5.0.0-alpha.16...v5.0.0-alpha.17) (2023-04-12)


### Bug Fixes

* add a hidden `input` element in `ComboBoxField` and `LookupField` to assign their selected key to their field name ([d2bf7ba](https://github.com/osuresearch/ui/commit/d2bf7bad533130b2797ef168bf8966ae46172373)), closes [#20](https://github.com/osuresearch/ui/issues/20) [#56](https://github.com/osuresearch/ui/issues/56)
* **Button:** incorrect display mode when used as a polymorphed element ([a8af1f1](https://github.com/osuresearch/ui/commit/a8af1f1ac251724b4e4fc1e77748e706f7f73386))
* **Button:** omit hover styles while disabled ([b9566e6](https://github.com/osuresearch/ui/commit/b9566e6298af15c9f423e79afb79203a2299e6e2))
* **CheckboxIcon and RadioIcon:**  prevent the icons from being compressed when their following text is very long  ([a5d655c](https://github.com/osuresearch/ui/commit/a5d655cdcd135c600bf5b4c85e0a0e771e268bb5)), closes [#25](https://github.com/osuresearch/ui/issues/25) [#45](https://github.com/osuresearch/ui/issues/45)
* **CheckboxIcon:** incorrect ARIA role ([74430e7](https://github.com/osuresearch/ui/commit/74430e7c50438ebc518de19300a874eb78318ee4))
* **CheckboxIcon:** incorrect colors when disabled ([3e1d462](https://github.com/osuresearch/ui/commit/3e1d462fdc77525f73bdcc71bfd8d2dd3c3b1eac))
* **Details:** hide the detail marker in Safari ([4326081](https://github.com/osuresearch/ui/commit/4326081977ad42f5f34ac0ac9f1c179168e4ce7f)), closes [#1](https://github.com/osuresearch/ui/issues/1) [#43](https://github.com/osuresearch/ui/issues/43)
* disable prettier errors when using the VSCode plugin ([62c68ce](https://github.com/osuresearch/ui/commit/62c68cea557164c845d360a6a844232a4cc4c3f9))
* **FormErrors:** incorrect type for errorMessage keys ([2819ad4](https://github.com/osuresearch/ui/commit/2819ad4c8f2f4403161fcfa3cd4fca9ca03b2b96))
* **Icon:** missing aria-label when role is img ([56e28ac](https://github.com/osuresearch/ui/commit/56e28ac608f86b3866a6f17e308e3a44e5e1d144))
* **NecessityIndicator:** set `aria-label` instead of label ([b558ddd](https://github.com/osuresearch/ui/commit/b558ddd856c04be32e3eeca4ed48dea78465e481))
* **NumberField:** add a hidden `input` element to tie a `NumberField`'s numberValue to its name in `FormData` ([3c2dc46](https://github.com/osuresearch/ui/commit/3c2dc46167a29d65d5153bb13ab06bc3a2d93116)), closes [#55](https://github.com/osuresearch/ui/issues/55) [#60](https://github.com/osuresearch/ui/issues/60)
* **RadioIcon:** incorrect colors when disabled ([39293f0](https://github.com/osuresearch/ui/commit/39293f0cfdad86195bfa9ef074b965cef67a4bc3))
* **RadioSetField:** prevent react-aria warnings ([9f24b80](https://github.com/osuresearch/ui/commit/9f24b8067500046cc76c0bcae3572545c3bb11ae)), closes [#61](https://github.com/osuresearch/ui/issues/61)
* react-aria warnings when children or aria-label were not provided to the hook ([c4a7acd](https://github.com/osuresearch/ui/commit/c4a7acd92456d8119022efd64d2b36f32e037847))
* **ScrollArea:** adaptive height when the viewport is smaller than the area limits ([62c416f](https://github.com/osuresearch/ui/commit/62c416fb28aec42c8227d5d6fcbf5ff17776474d))
* **SwitchIcon:** set a min width to prevent resizing ([70b499f](https://github.com/osuresearch/ui/commit/70b499f8db8e8137143340214adc77f0cf6b69c1))
* **useScreenSize:** screens larger than xxl do not get correct breakpoints applied ([f7fe24c](https://github.com/osuresearch/ui/commit/f7fe24ca88be5cc8ba801aec75457824db997efc)), closes [#48](https://github.com/osuresearch/ui/issues/48)
* **YesNoField:** fix exposed types in value/onChange ([9540655](https://github.com/osuresearch/ui/commit/95406552358212001352be2147d63fbf5941c538))


### Features

* Add `Section` component to avoid needing to expose react-stately to consumers ([c449b18](https://github.com/osuresearch/ui/commit/c449b18ef12233122aee1bab6cd03be0381a2d48))
* add Figma token file for use with Tokens Studio ([a24c203](https://github.com/osuresearch/ui/commit/a24c203b98b222ccd517fbfb5f523ced10cfd25b))
* add ProgressBar component ([0eef567](https://github.com/osuresearch/ui/commit/0eef56793a8d04320ed5d83fc584d5a54d2c37a1)), closes [#13](https://github.com/osuresearch/ui/issues/13)
* **Arrow:** add `size` prop ([286cfd7](https://github.com/osuresearch/ui/commit/286cfd74d9e615cdd11fa2dbba733cb573a4e3e0))
* **CheckboxSetField:** add `placeholder` prop and compatibility with React Stately lists ([9ba9ffc](https://github.com/osuresearch/ui/commit/9ba9ffc99209cfdc73a5ba9d179ad21cb2bbee87))
* **Icon:** add optional `label` prop to set role to `img` when defined ([9269141](https://github.com/osuresearch/ui/commit/92691415b349515dc64b049a44a18f2fb85aba2c))
* **ListBox:** add support for sections ([dc2770a](https://github.com/osuresearch/ui/commit/dc2770a4056b43848cac40ac4b07f388a2d24a61))
* **Menu:** add `isDisabled` prop ([9dd8b2b](https://github.com/osuresearch/ui/commit/9dd8b2be0205efaed3e0686e9ddcedb60a9d6f2d)), closes [#54](https://github.com/osuresearch/ui/issues/54)
* **Menu:** add support for sections ([e4c6d58](https://github.com/osuresearch/ui/commit/e4c6d589fab04ac72a6d0a4af64526a74afb99a0))
* **RadioSetField:** support custom item renderers ([9f4be1d](https://github.com/osuresearch/ui/commit/9f4be1db7debd358a0b092e8e20d05baa4a6dda5))
* **Tooltip:** add placement and offset props ([e5b6b06](https://github.com/osuresearch/ui/commit/e5b6b0662161094ffb7ed469238b185a5500e85c))
* **UnstyledButton:** add `data-disabled` when the disabled state is passed down ([e8ed19b](https://github.com/osuresearch/ui/commit/e8ed19bfb024b5535606b4ef4810db3950c24843))


### Performance Improvements

* refactoring dependencies to reduce bundle size ([fe24bff](https://github.com/osuresearch/ui/commit/fe24bff14ad9335a22e57f1f2df835ef5d2491e4))

# [5.0.0-alpha.16](https://github.com/osuresearch/ui/compare/v5.0.0-alpha.15...v5.0.0-alpha.16) (2023-03-16)


### Bug Fixes

* **useScreenSize:** screens larger than xxl do not get correct breakpoints applied ([41edc92](https://github.com/osuresearch/ui/commit/41edc92f2f33f9240b2682e74e90829877559778)), closes [#48](https://github.com/osuresearch/ui/issues/48)


### Performance Improvements

* refactoring dependencies to reduce bundle size ([85dea0a](https://github.com/osuresearch/ui/commit/85dea0a3fc4962d298943526f296b03ae75b4898))

# [5.0.0-alpha.15](https://github.com/osuresearch/ui/compare/v5.0.0-alpha.14...v5.0.0-alpha.15) (2023-03-16)


### Bug Fixes

* **Avatar:** renders broken image placeholders in Safari and Chrome ([4b626c9](https://github.com/osuresearch/ui/commit/4b626c9c94adda21462f7fb27b514fdd7dd5eeaf)), closes [#3](https://github.com/osuresearch/ui/issues/3)
* **Button:** incorrect display mode when used as a polymorphed element ([b586474](https://github.com/osuresearch/ui/commit/b586474b2d1f8adbbe9b1e2d936199712d8549d1))
* **Button:** omit hover styles while disabled ([299437a](https://github.com/osuresearch/ui/commit/299437a73525124cc84ae53abe873ba6d001210e))
* **deps:** `react-hook-form` is an optional dependency ([e454ea6](https://github.com/osuresearch/ui/commit/e454ea666252e46955f54f42555c36066bb3e240))
* **FormErrors:** incorrect type for errorMessage keys ([44603a9](https://github.com/osuresearch/ui/commit/44603a9d88325be565af75b3ce966113fcabdb99))
* **Image:** standardize broken image placeholder across browsers ([2facb72](https://github.com/osuresearch/ui/commit/2facb729b0acf6adcacf8190a96f1c96fa7acd8e)), closes [#5](https://github.com/osuresearch/ui/issues/5)
* inconsistent value and onChange types behaviour across form fields ([70a6d02](https://github.com/osuresearch/ui/commit/70a6d0282907ba29c5401504edb3a60309fd5e87))
* **OhioStateFooter:** do not use semantic `footer` element ([dd5001c](https://github.com/osuresearch/ui/commit/dd5001ccfac4098a52874d0e42a81b2f1b0c8a58)), closes [#46](https://github.com/osuresearch/ui/issues/46)
* **SwitchField:** incorrect value, defaultValue, and onChange types ([6e67ef6](https://github.com/osuresearch/ui/commit/6e67ef644b77a8719c9007b0eaa68658ee0bd075)), closes [#24](https://github.com/osuresearch/ui/issues/24)
* **ToggleButton:** `variant` prop should be optional ([0f0f991](https://github.com/osuresearch/ui/commit/0f0f991d300c5ba139f909894dccddc19428cb28))
* **UnstyledToggleButton:** remove polymorphism to avoid conflict with base button props ([cf45d30](https://github.com/osuresearch/ui/commit/cf45d30bb4fbfa73f3438c71cd70b3c5dc2b952d)), closes [#31](https://github.com/osuresearch/ui/issues/31)
* **YesNoField:** fix exposed types in value/onChange ([18ee1ad](https://github.com/osuresearch/ui/commit/18ee1ad8eddf61b5c781f478dc617bb7c41e9218))


### Features

* add Admonition component for non-alert content ([a892060](https://github.com/osuresearch/ui/commit/a892060705a9153301f6d42cba8428b75842203d)), closes [#39](https://github.com/osuresearch/ui/issues/39)
* add ScrollArea component ([a2a92a7](https://github.com/osuresearch/ui/commit/a2a92a7dcb266ccae1cb57a29756a50b607aa0db))
* **RadioSetField:** support custom item renderers ([4ff9340](https://github.com/osuresearch/ui/commit/4ff93408d9eea18f315ded2c9dfec303508d92db))
* **UnstyledButton:** add `data-disabled` when the disabled state is passed down ([7fc4859](https://github.com/osuresearch/ui/commit/7fc4859e0fd87a79544a81f64ae5e7d8a224ba87))

# [5.0.0-alpha.14](https://github.com/osuresearch/ui/compare/v5.0.0-alpha.13...v5.0.0-alpha.14) (2023-03-15)


### Bug Fixes

* **CheckboxIcon and RadioIcon:**  prevent the icons from being compressed when their following text is very long  ([e5e3406](https://github.com/osuresearch/ui/commit/e5e34065a1994fa61a05c45ed8b28333cbd6e6fa)), closes [#25](https://github.com/osuresearch/ui/issues/25) [#45](https://github.com/osuresearch/ui/issues/45)
* **Details:** hide the detail marker in Safari ([3a6352c](https://github.com/osuresearch/ui/commit/3a6352c6aaa04f22d12d0bebd7b1d37638cf0cfd)), closes [#1](https://github.com/osuresearch/ui/issues/1) [#43](https://github.com/osuresearch/ui/issues/43)

# [5.0.0-alpha.13](https://github.com/osuresearch/ui/compare/v5.0.0-alpha.12...v5.0.0-alpha.13) (2023-02-20)


### Bug Fixes

* added `cursor-not-allowed` attribute to stop the cursor rendering as a pointer when it's disabled ([b9a602d](https://github.com/osuresearch/ui/commit/b9a602d68b97ebbb51664f603d28a265a6261051)), closes [#6](https://github.com/osuresearch/ui/issues/6)

# [5.0.0-alpha.12](https://github.com/osuresearch/ui/compare/v5.0.0-alpha.11...v5.0.0-alpha.12) (2023-01-31)


### Bug Fixes

* **build:** reconfigure tsc to target ES5 and DOM ([51d2fda](https://github.com/osuresearch/ui/commit/51d2fdae6c887815169b4108aa480839c0e2933b))
* **build:** remove bundling of react-hook-form and internationalized/date ([317613b](https://github.com/osuresearch/ui/commit/317613bb7b95c8889a5bdcc79a671a82dff6bb9b))
* **Chip:** isRemovable prop is optional ([cc17cb7](https://github.com/osuresearch/ui/commit/cc17cb79a9ac23826e414e042de6605999956f08))
* **ComboBoxField:** misaligned dropdowns ([99fa9cf](https://github.com/osuresearch/ui/commit/99fa9cfabd81e1fc43878224c5718801f8123841))
* missing hook export ([9d843c8](https://github.com/osuresearch/ui/commit/9d843c8d72ab37d904af91398813182a4a0877c5))
* **NumberField:** incorrect base type for props ([ca58a26](https://github.com/osuresearch/ui/commit/ca58a26d756f0e8c620eac4814c66f7730f025a3)), closes [#21](https://github.com/osuresearch/ui/issues/21)
* remove array spread from collection iterators ([d67da70](https://github.com/osuresearch/ui/commit/d67da704482deccac2227ec0715f93a578331b3f)), closes [#23](https://github.com/osuresearch/ui/issues/23)
* **TextAreaField:** extraneous rows rendered ([d3ba156](https://github.com/osuresearch/ui/commit/d3ba156f6a8f2b43c19aea4911a5a9100a119906)), closes [#26](https://github.com/osuresearch/ui/issues/26)


### Features

* add edit icon ([5a93e43](https://github.com/osuresearch/ui/commit/5a93e43fbaba678d24add7f79c667e91903c71c7)), closes [#27](https://github.com/osuresearch/ui/issues/27)
* **Heading:** add className, id, and style props ([c61e912](https://github.com/osuresearch/ui/commit/c61e9125f35edd3b4665fb43cc3def285261b65c)), closes [#28](https://github.com/osuresearch/ui/issues/28)
* **LookupField:** add support for a custom icon and using the item renderer for the selection ([3efde0c](https://github.com/osuresearch/ui/commit/3efde0cda4d0e1e5b1cd2bcbd33a57b66f13e5eb))

# [5.0.0-alpha.11](https://github.com/osuresearch/ui/compare/v5.0.0-alpha.10...v5.0.0-alpha.11) (2023-01-27)


### Bug Fixes

* **build:** resolve a number of issues around the build process for d.ts files ([57ef153](https://github.com/osuresearch/ui/commit/57ef153d9b8c7d2883ef94049707556f2b428cab))
* **Button:** subtle variant missing text contrast for dark mode ([1d23a3f](https://github.com/osuresearch/ui/commit/1d23a3fd2b5d6f5c4e45eea71e23e642781bef80))
* **ComboBoxField:** icon size to match the rest ([1013587](https://github.com/osuresearch/ui/commit/10135871fcfa31930a2e32aa88a3e6be82c9bc73))
* **Divider:** invalid width when in a flex-grow container ([19606a5](https://github.com/osuresearch/ui/commit/19606a5c48381a4af70fc2c3f84fe2c9a8bc8969))
* **Icon:** add role for aria labeling ([8287cb8](https://github.com/osuresearch/ui/commit/8287cb8a21ef48d39571639c29c5a51877d3a303))
* **LookupField:** close icon alignment ([607713b](https://github.com/osuresearch/ui/commit/607713b851394f52d2e31c9e0d356be214a5a244))
* missing TS declarations path ([f56317f](https://github.com/osuresearch/ui/commit/f56317f5b8239a02590a14adf6ca41b435c18cbb))
* **RadioIcon:** incorrect border color when disabled ([328a841](https://github.com/osuresearch/ui/commit/328a8418726091086a90e4753747f0430476c10b))


### Features

* add DateField component ([8e8fd0c](https://github.com/osuresearch/ui/commit/8e8fd0cbaf2594239781134a37fc1c66bcf1ecc0))
* add FormErrors component for standardizing a list of errors and a11y focus links ([b44c3f0](https://github.com/osuresearch/ui/commit/b44c3f035279712146085bbaecb38ea74398aa6e))
* add Table component ([14e9116](https://github.com/osuresearch/ui/commit/14e9116c6d767eab87edec9c49cb166c30311eda))
* add ToggleButton and HamburgerButton components ([e54060e](https://github.com/osuresearch/ui/commit/e54060e0c37fd7d6ab3d0fbf3efad877ea40b353))
* add useRUIForm hook to support  react-hook-form integration across all field components ([5af4f7f](https://github.com/osuresearch/ui/commit/5af4f7ff541f3e1f1345106e88d24c9dc230db50))
* add useTabularData hook to support typical use cases for data tables ([7075183](https://github.com/osuresearch/ui/commit/7075183068ae459f4b216bf91674e670e02ad93a))
* **Code:** add block display mode ([c5935f3](https://github.com/osuresearch/ui/commit/c5935f37a7061c008c2d5ddcd5551d5d50a5b226))
* **FormField:** add `data-field` and `data-label-for` for a11y focus control without a context ([ad71c50](https://github.com/osuresearch/ui/commit/ad71c50d1fff82720a101487f3f07d2314b7c867))
* **Icon:** add `blank` for a placeholder that renders no content ([fc77be8](https://github.com/osuresearch/ui/commit/fc77be8f013c8fbd533e78da361455be3b52f3a9))
* standardize on `value` and `onChange` props for collection fields CheckboxSet, ComboBox, Lookup, and Select ([ad5e833](https://github.com/osuresearch/ui/commit/ad5e833abe3a4b438afe9aed1d9cb58fb126fea1))
* **Table:** add sort icons to columns ([886d15b](https://github.com/osuresearch/ui/commit/886d15bec8ffd5cb3d1159e6b988477973041e2e))
* **Table:** add support for style system props ([7f128c3](https://github.com/osuresearch/ui/commit/7f128c34f7970446fdbe01abda7f41f8a6619b91))

# [5.0.0-alpha.10](https://github.com/osuresearch/ui/compare/v5.0.0-alpha.9...v5.0.0-alpha.10) (2023-01-20)


### Bug Fixes

* **Button:** bad Omit prop type ([dd6e706](https://github.com/osuresearch/ui/commit/dd6e706646373554e6c2e5dc8173ac98b914d68d))
* **Callout:** using the wrong type for `placement` prop ([0d51958](https://github.com/osuresearch/ui/commit/0d51958b1ba16b47dedf060923b8280cebc8feac))
* **Chip:** mismatched padding ([8b75cdb](https://github.com/osuresearch/ui/commit/8b75cdbf72b00cfe5cd0ae01b775ef39cd9d5215))
* improve CSS cascading issues with theme tokens, now RUI Providers may be nested safely ([1f6b141](https://github.com/osuresearch/ui/commit/1f6b141bd61b4a71ec82538c8a4402b0096ef17b))
* **storybook:** automatic detection of component doc pages ([aab8ab8](https://github.com/osuresearch/ui/commit/aab8ab8f6d81ea70c1f1909566887dd5e7a3a452))
* **storybook:** build does not reference correct SVG path ([844518e](https://github.com/osuresearch/ui/commit/844518ed1314f6ac2f8cb3a2160174bc019be040))
* **storybook:** include props from React Aria and React Stately in docs ([1415402](https://github.com/osuresearch/ui/commit/14154023ba5fef1e46dfe4ef5146fef2e0eb9120))
* **storybook:** Safari does not render `backdrop-filter` (closes [#4](https://github.com/osuresearch/ui/issues/4)) ([af415e1](https://github.com/osuresearch/ui/commit/af415e1eb990082d1c59f18b0df61db336942623))
* **UnstyledButton:** force prop coercion to work around rollup issue ([3c1a5aa](https://github.com/osuresearch/ui/commit/3c1a5aa1a6ea4c4ff8a6937e5db396d5c7b4651c))
* **UnstyledButton:** merge forwarded ref with button ref ([065d8b5](https://github.com/osuresearch/ui/commit/065d8b5bba94f5537ad1dd40249c2cdc3dd879ff))


### Features

* add LookupField, ComboBoxField, and NumberField components ([4b8607b](https://github.com/osuresearch/ui/commit/4b8607bafea53c63b69b4220338c0bf151ee8cb0))
* add Menu component ([7c8b4e7](https://github.com/osuresearch/ui/commit/7c8b4e7971c2406e97e0a95c5215cbc881422638))
* add Ohio State Navbar ([6caad37](https://github.com/osuresearch/ui/commit/6caad370203a3c80b103b730eb6661d25b75d601))
* add RadioSetField ([b716d95](https://github.com/osuresearch/ui/commit/b716d95b6e6c0029717f01dbc8d843d0f65976e1))
* add SelectField for single option selection ([7a345f7](https://github.com/osuresearch/ui/commit/7a345f74ba9a294ec1d4d93e2d15ad20077b13e4))
* add YesNoField component ([a12fcc2](https://github.com/osuresearch/ui/commit/a12fcc2a682b0f2c0fc919c6a6f1d84f10671f9d))
* **OhioStateNavbar:** add light and dark variants ([3d20cca](https://github.com/osuresearch/ui/commit/3d20ccaa6306b5b8e520603012a0310390597df7))
* **Popover:** add option to disable the arrow ([4fe5717](https://github.com/osuresearch/ui/commit/4fe5717dbd0fea23b81fe927a3f3f192c23b5a36))
* **Popover:** add support for manually defining placement ([bf3ff03](https://github.com/osuresearch/ui/commit/bf3ff03c7976f62c23f2cdb0fb3b3acb0a5efaa0))
* **RUI Provider:** add theme control ([2bb8a8d](https://github.com/osuresearch/ui/commit/2bb8a8dfa5090538c2a3cf8c055fc399a420e4a5))


### Performance Improvements

* **storybook:** resolve lag issue when a component has too many event handler props, specifically inputs ([bec0e69](https://github.com/osuresearch/ui/commit/bec0e69c5829db3e0e1a0e5eb35a49659cd86554))

# [5.0.0-alpha.9](https://github.com/osuresearch/ui/compare/v5.0.0-alpha.8...v5.0.0-alpha.9) (2023-01-10)


### Bug Fixes

* **ci:** lock semantic-release to v19 due to Node 18+ requirements in v20 ([71edfb1](https://github.com/osuresearch/ui/commit/71edfb1a35f259fd6b150ec918f39c47856e8ce2))
* **Details:** missing focus ring ([937f077](https://github.com/osuresearch/ui/commit/937f077a8a8344ad167a8b4362a61f59a7ab9149))
* **Divider:** incorrect width ([cd04e3e](https://github.com/osuresearch/ui/commit/cd04e3ee6c6ae06bda15951ff221a56dbd2ba551))
* **Grid:** make props optional ([469a14a](https://github.com/osuresearch/ui/commit/469a14ae3174d135eb33cdcedb2617b496f8b22f))
* **InputField:** add missing necessity indicator ([a77d1a0](https://github.com/osuresearch/ui/commit/a77d1a090aa6359d87ff4f8ccad38bcd59a4c5d6))
* missing focus ring on icon slot components ([39a746c](https://github.com/osuresearch/ui/commit/39a746c64003149504fcda7f7e7bccb0bfbf941e))
* **Stack:** match Groups defaults for align and justify ([f2facd9](https://github.com/osuresearch/ui/commit/f2facd9281d2af05597e1a9e7dac959b57eed962))
* **TabPanel:** disabled state is still interactive ([839ee4d](https://github.com/osuresearch/ui/commit/839ee4dfa17b373bb10385ca4d4f8e4b369b03c5))
* **TabPanel:** remove panel background for simple variant ([7b93b34](https://github.com/osuresearch/ui/commit/7b93b34de5a6730d95921748cd4867159aa345bd))
* **tailwind:** reduce intensity of ping animation ([d788d13](https://github.com/osuresearch/ui/commit/d788d13a84ce37bab3f086df4eafbd3675169a9b))
* **tailwind:** remove Tailwind forms to better support our own UX ([7867288](https://github.com/osuresearch/ui/commit/7867288e6c3c0f7cf14bd74c90abc64973a2ffa7))
* **UnstyledButton:** react-aria button props override passed down props ([deb668b](https://github.com/osuresearch/ui/commit/deb668b6ad96e5156fab555ab469d4070705e1c3))
* **useStyleSystem:** responsive font props are not resolved ([d05b8a2](https://github.com/osuresearch/ui/commit/d05b8a27c4aff8f350711f3e8412aece17d3652b))


### Features

* add a factory method to generate a placeholder component on required slots ([535afa1](https://github.com/osuresearch/ui/commit/535afa1470596a99edfab54b4aa503984e8c219a))
* add Arrow component ([2bbdaee](https://github.com/osuresearch/ui/commit/2bbdaee9ae10eb5c6ac187c952356ec8f7f853ea))
* add Chip component ([89bc66c](https://github.com/osuresearch/ui/commit/89bc66c785119fea9438ac0d071ad94f4c6f5924))
* add FormDialog, InformationDialog, ConfirmDialog, Modal, and ConfirmButton components ([86df804](https://github.com/osuresearch/ui/commit/86df8046adc8de7dfa9e1662a6828d24a06344f5))
* add logo ([6b601e6](https://github.com/osuresearch/ui/commit/6b601e645b04545097e0aae98b78a7cde787d85e))
* add Ohio State Footer component ([0bc4e63](https://github.com/osuresearch/ui/commit/0bc4e63b9d7aa6f0215fab96d49ec51137c6c9b7))
* add SwitchIcon and SwitchField components ([80420c0](https://github.com/osuresearch/ui/commit/80420c0cd24d8438658958c3683410adc1e85db5))
* add TextField and TextAreaField components ([ca24e91](https://github.com/osuresearch/ui/commit/ca24e91748e108b2df7274f9a9081e57e9109658))
* **Alert:** improve dark mode colors ([60e59d8](https://github.com/osuresearch/ui/commit/60e59d86863885732de8eac0005b427a28114523))
* **Button:** add accented variant for usage against accent backgrounds ([f620aad](https://github.com/osuresearch/ui/commit/f620aad09835b05026d625721780d6be9043ff80))
* **Callout:** add support for accent backgrounds ([cefa606](https://github.com/osuresearch/ui/commit/cefa6062f3a53c68784045a023248b6b01902c38))
* **CheckboxIcon:** match BUX for disabled state ([fb5a0e4](https://github.com/osuresearch/ui/commit/fb5a0e4c25e824fc9502603cf9dd9bbf5c1a942d))
* **Image:** add support for theme responsive `src` ([03e33cc](https://github.com/osuresearch/ui/commit/03e33cc2c1d3f5a11b20607866ecb34d3165f082))
* **InputField:** add left and right slots ([31132bb](https://github.com/osuresearch/ui/commit/31132bb00f7ad6502844a6c39fd02a3f176ef354))
* **Popover:** add arrow and accented background support ([06d42e3](https://github.com/osuresearch/ui/commit/06d42e36ae6ddff1c290c559be45376158fd9e69))
* **storybook:** add support for automatically embedding component diagram SVGs ([4573772](https://github.com/osuresearch/ui/commit/45737723c6f33aab226119218dd053e5643ba581))

# [5.0.0-alpha.8](https://github.com/osuresearch/ui/compare/v5.0.0-alpha.7...v5.0.0-alpha.8) (2023-01-05)


### Bug Fixes

* **Badge:** uniform vertical alignment and gap for children ([0c0b47e](https://github.com/osuresearch/ui/commit/0c0b47ecdbc2c881dcf303729f9e4e10e9f9f7b0))
* **CloseButton:** pass down padding to the icon ([3bf3f18](https://github.com/osuresearch/ui/commit/3bf3f18bd936b3a8b46a228b3e353d7cb1c48d5d))
* **Divider:** increase line width to match BUX ([e073397](https://github.com/osuresearch/ui/commit/e073397111e6f41b40dfbf21b80b31d95d26e7c1))
* **IconButton:** icon did not center within larger button surfaces ([602f865](https://github.com/osuresearch/ui/commit/602f8650edfc256820adf252a31c6199b28871a8))
* **Indicator:** size requires pixels instead of spacing units ([d95466a](https://github.com/osuresearch/ui/commit/d95466a9c8944e958b951de14f4ad02c3577def7))
* **Popover:** keyboard focus will no longer leave the popover' ([4ab509e](https://github.com/osuresearch/ui/commit/4ab509ed8668de32be13704510316e9b98982e25))
* **PrimaryButton:** match BUX's button padding ([379af43](https://github.com/osuresearch/ui/commit/379af4333a980495eb37f2cc72f52c989709f036))
* **Table:** width should be 100% of the content ([a287269](https://github.com/osuresearch/ui/commit/a287269694817167c79468144a007738973993c7))
* **theme tokens:** wrong dimmed-contrast for dark theme ([f64d9f4](https://github.com/osuresearch/ui/commit/f64d9f4fbb1e835c7fd499c60804e33bfdb2cb3b))
* **Tooltip:** absolute positioning relative to the trigger ([e649c77](https://github.com/osuresearch/ui/commit/e649c77ede3ad1cfff8baaa9a5593d536553e5d9))
* **UnstyledToggle:** add missing focus ring ([d9ca6b9](https://github.com/osuresearch/ui/commit/d9ca6b950f433b7bac89abcb51a359c8b6c9da51))
* **utils:** handle responsive props that resolve to undefined ([1d42b85](https://github.com/osuresearch/ui/commit/1d42b855e81da27763ba3f1a70e52f1197894a77))


### Features

* add `position: relative` as default behaviour for Group and Stack ([027896e](https://github.com/osuresearch/ui/commit/027896e8146a8b202da87a8bc7f44e580ec5bc7e))
* add BUX-style Back to Top button ([b908123](https://github.com/osuresearch/ui/commit/b908123ab1a8be5803997690723120e321215528))
* add Code component ([143a65b](https://github.com/osuresearch/ui/commit/143a65b7f551351ff590e9a616d3048575f9374f))
* add CSS Grid layout component ([a3db432](https://github.com/osuresearch/ui/commit/a3db43245247c8e2861d8aa75116fcf903b0a6a1))
* add illustrations for content empty states and brand SVGs ([8fcc05f](https://github.com/osuresearch/ui/commit/8fcc05f8139e81938cfb9d7999211378023a7838))
* add Kbd component ([902fac7](https://github.com/osuresearch/ui/commit/902fac7b3924f9bc0045e942d62585b4c8454a5e))
* add Tooltip component ([308a843](https://github.com/osuresearch/ui/commit/308a84362904ae31fa179ad00fd8c32e9b46800d))
* **Group:** add support for wrapping content ([3e76a92](https://github.com/osuresearch/ui/commit/3e76a923ab9ccbbb8cb4990ff4c1c329ef4f3ae2))
* **Icon:** improve alignment and add support for passing down props to the svg ([63b45e0](https://github.com/osuresearch/ui/commit/63b45e032bc460ad8a75a9e08fcd173c14a81d55))
* **Paper:** add support for accents ([0e06027](https://github.com/osuresearch/ui/commit/0e06027ed8793749da1b3ec0e5e66440389b629e))
* **style system:** add standard grid layout props and theme-resolved props ([95a782a](https://github.com/osuresearch/ui/commit/95a782a2f17bdfdd6badcff5dad7c70afaff0fc5))
* **TabPanel:** add variants, focus rings, and button semantics for tab buttons ([8685eae](https://github.com/osuresearch/ui/commit/8685eae70dbe9676e6dff0dd2efa243cd8a8f1c4))
* **UnstyledButton:** add `data-pressed` attribute during pressed states - active pseudo is not used via React Aria's useButton ([35cbbfd](https://github.com/osuresearch/ui/commit/35cbbfd564b787b1e6a3316f554ec3df92cbbc6e))

# [5.0.0-alpha.7](https://github.com/osuresearch/ui/compare/v5.0.0-alpha.6...v5.0.0-alpha.7) (2023-01-03)


### Bug Fixes

* **style system:** resolve CSSProperties instead of spacing tokens for size props w, h, miw, mih, maw, and mah ([30b15ad](https://github.com/osuresearch/ui/commit/30b15ad524f9ef5f226fceb594007799e4530359))


### Features

* add Callout and Popover components ([83b6d42](https://github.com/osuresearch/ui/commit/83b6d4246e3070a5d2cdaa3658dd9cf93e4a0e2a))
* add Focus Ring, Underlay, Unstyled Toggle, RUI Provider, and Radio Icon components ([68d5920](https://github.com/osuresearch/ui/commit/68d59204455caa1cdc9b65470650dbb66c00d378))
* simplify and standardize focus ring styles ([c7a69af](https://github.com/osuresearch/ui/commit/c7a69af23325be80de02ff2e029e56ce2d7bad18))
* **Underlay:** add variants ([6c53892](https://github.com/osuresearch/ui/commit/6c5389236a82352ad442eac6c4525a58558ad7e8))

# [5.0.0-alpha.6](https://github.com/osuresearch/ui/compare/v5.0.0-alpha.5...v5.0.0-alpha.6) (2023-01-02)


### Bug Fixes

* **Center:** switch to CSS Grid for simpler alignment ([4a209f9](https://github.com/osuresearch/ui/commit/4a209f9639a7bed71f307c474a421d9093017b75))
* **Link:** add missing ref ([07b6d9c](https://github.com/osuresearch/ui/commit/07b6d9c2878fa0a3d5fb725880eed866e43e33a5))


### Features

* add components for checkboxes and checkbox groups ([6e91322](https://github.com/osuresearch/ui/commit/6e91322d05111b37e1ba6bd4590af359c52baa2a))
* add contrast tokens for accent colors ([c4b591a](https://github.com/osuresearch/ui/commit/c4b591a7390d61c2ddba5a57b777a7b4c70f4d54))
* add External Link, Missing Slot, and Necessity Indicator components ([8655803](https://github.com/osuresearch/ui/commit/8655803cea271a03d82c99f89445e899920d5c44))
* add input field abstractions ([ebf624e](https://github.com/osuresearch/ui/commit/ebf624e902174b11cf3e4edd788d7a4e14a6ac4b))
* add ToggleField for abstracting boolean and keyword atomic fields ([19b22aa](https://github.com/osuresearch/ui/commit/19b22aa7ed12791c1cec00d3261c20c7f54fd331))
* add useStyleSystemProps hook for reducing props to only StyleSystemProps ([8ea785b](https://github.com/osuresearch/ui/commit/8ea785bbab19670246fb5474c8cf949345daa825))
* **Badge:** add support for accent colors ([407a546](https://github.com/osuresearch/ui/commit/407a54619736d4b46dc94515321cbdad2667900d))
* **style system:** add support for that occassionally useful negative pixel ([e64343e](https://github.com/osuresearch/ui/commit/e64343e5d3f96af41860611973df6a4fc66df23d))

# [5.0.0-alpha.5](https://github.com/osuresearch/ui/compare/v5.0.0-alpha.4...v5.0.0-alpha.5) (2023-01-01)


### Bug Fixes

* **deps:** drop unecessary import of tailwind utilities to cut build size in half ([aebe361](https://github.com/osuresearch/ui/commit/aebe36182689c7134770e175bb125497c147010f))
* **DocumentPagination:** add missing forwarded ref ([c4acdb1](https://github.com/osuresearch/ui/commit/c4acdb1cf531360ed0007f8437235f207f6808ac))
* **eslint:** no longer creates false reports of unused variables on typescript types ([05d1268](https://github.com/osuresearch/ui/commit/05d1268fbbf6ea47bda2be6b854e7e1dff776044))
* **Icon:** add missing forwarded ref ([ce00264](https://github.com/osuresearch/ui/commit/ce00264e586e9a10bf96eee983c2c77331a25f93))
* **Interview:** hide Q+A labels from screen readers ([e455b76](https://github.com/osuresearch/ui/commit/e455b761a3697982f3130558d96c0257b716b07b))
* remove cyclic dependencies that slow down builds ([745d639](https://github.com/osuresearch/ui/commit/745d639437d062d30c048aa2efafd7b407cb7cb2))
* **tailwind:** add missing min-width and min-height spacing tokens ([29fa6e7](https://github.com/osuresearch/ui/commit/29fa6e762bef7c3dba5d59856eb429b1f70395ab))


### Features

* add AvatarGroup component ([e491057](https://github.com/osuresearch/ui/commit/e491057aaaffd9f1e1b8c79a65851b4178eaad31))
* add Image component ([98a0ba7](https://github.com/osuresearch/ui/commit/98a0ba7fbdfa450ffe396475ed3f9b6e640f5a70))
* add useScreenSize hook ([ab1326a](https://github.com/osuresearch/ui/commit/ab1326acc06556f6550a7f0e70fe92b6a6b9bb87))
* **Avatar:** improve edge anti-aliasing and add polymorphism ([f9d7dd3](https://github.com/osuresearch/ui/commit/f9d7dd3d1f9974a992189be81d3ba86ae5aa0b70))
* **IconButton:** add background shade on hover ([0490585](https://github.com/osuresearch/ui/commit/0490585456a35a3461cc50ad3c032707ad301876))
* **storybook:** add live demo for each breakpoint ([148412d](https://github.com/osuresearch/ui/commit/148412ddfeef800031ee51aa858ecaf0170bebb8))

# [5.0.0-alpha.4](https://github.com/osuresearch/ui/compare/v5.0.0-alpha.3...v5.0.0-alpha.4) (2022-12-29)


### Bug Fixes

* **polymorphics:** compile-time prop checking and support for non-ReactNode children - required by React Aria components ([d0bf92b](https://github.com/osuresearch/ui/commit/d0bf92b223c6a38a2b457c4bb168adffc3089ddd))


### Features

* add constants and types for style system prop groups ([96490aa](https://github.com/osuresearch/ui/commit/96490aa71ac91b982429c407d2d7858fe0d04304))
* add new UnstyledList component ([84f20fe](https://github.com/osuresearch/ui/commit/84f20fe0436f299768f1ebfb6e656b4bd3702b59))
* add our own mergeRefs function with polymorphic ref support ([28ac028](https://github.com/osuresearch/ui/commit/28ac028dd8fceddda7bae9bdfacadb213c09c525))
* add type checks for responsive and theme map types ([153095f](https://github.com/osuresearch/ui/commit/153095f7c574e2413f8cb3b7a29921fccc26636c))
* add useStyleSystem and useSlots hooks ([9c56645](https://github.com/osuresearch/ui/commit/9c56645206d5d452cac61c92e82c6fd2dda4286a))
* **TabPanel:** add controlled component support ([5740db4](https://github.com/osuresearch/ui/commit/5740db4de65ec5605c607aa2e6e39512da25abe8))

# [5.0.0-alpha.3](https://github.com/osuresearch/ui/compare/v5.0.0-alpha.2...v5.0.0-alpha.3) (2022-12-26)


### Bug Fixes

* **Badge:** vertically center content ([fdd59f8](https://github.com/osuresearch/ui/commit/fdd59f8829e1c63e637afecd66692d183ca28fdb))


### Features

* add Item component based on Adobe's React Stately ([4c5ad9e](https://github.com/osuresearch/ui/commit/4c5ad9e81f926a22325040a2c65449b37ed19051))
* add support for `full` and `auto` spacing values ([03a099c](https://github.com/osuresearch/ui/commit/03a099c5ef099feea44f5f556a94321690f0d6cb))
* add TabPanel component ([df81faf](https://github.com/osuresearch/ui/commit/df81fafbd3fda069569a0ebacbf81b2984989980))
* **Table:** add variants and striped flag ([e8abe86](https://github.com/osuresearch/ui/commit/e8abe8680e895230b625a654d1511c11589c8da0))
* **tailwind:** add box shadow underline variants ([957c8ca](https://github.com/osuresearch/ui/commit/957c8ca53062bf430d1a660eb0b83f5a7ff5f1d2))

# [5.0.0-alpha.2](https://github.com/osuresearch/ui/compare/v5.0.0-alpha.1...v5.0.0-alpha.2) (2022-12-26)


### Bug Fixes

* **Details:** add missing ref and prop spread ([6c45531](https://github.com/osuresearch/ui/commit/6c4553173af489bbc42a01e4ea932290ffeca627))
* **IconButton:** use theme breaks instead of exact pixel values ([4927c05](https://github.com/osuresearch/ui/commit/4927c05a056800d88475f755cbce24ce81e9fbe8))
* **tailwind:** add missing patterns for xxs spacing ([8dd413e](https://github.com/osuresearch/ui/commit/8dd413e065a4e29a61b155fa712806c2b6f68bc2))


### Features

* add a11y and badge addons to Storybook and wrap redundant story code with factories ([4a3c1e5](https://github.com/osuresearch/ui/commit/4a3c1e534638752b4d03a2f88c9889b68f67cdd4))
* add HashLink component ([f5c900c](https://github.com/osuresearch/ui/commit/f5c900c321d374ca500b8d863073d9bdd4154ace))
* add new Section Title component to replace the Title variant ([a8c1649](https://github.com/osuresearch/ui/commit/a8c1649f80446209d55cf111ffc6c805e4016d1a))
* **Box:** add bgc prop ([9ae46f0](https://github.com/osuresearch/ui/commit/9ae46f03119fe304152e1b6b4fb51a890a76f65e))
* **Button:** add leftSlot and rightSlot props ([54976af](https://github.com/osuresearch/ui/commit/54976af39a9c8cd489ef9854a94068d6fd5b2e40))
* **Icon:** add inline support ([56abecb](https://github.com/osuresearch/ui/commit/56abecb7d52cd95f6c59671e7cfca2ff618190e7))
* **Icon:** add rotate and flip props ([3eed6a9](https://github.com/osuresearch/ui/commit/3eed6a9b167cab84daa772d2746fac0b55ec5792))
* **Indicator:** add style system support ([0d9c1fc](https://github.com/osuresearch/ui/commit/0d9c1fcea3d024ed6bac502c64969a70baf3807b))
* **scripts:** add index rebuilding as part of the new component script ([9e9fb5b](https://github.com/osuresearch/ui/commit/9e9fb5b3d9a12da117d3c708b1d2ac3cdbd1d923))
* **Title:** add BUX's responsive font sizes ([ba48854](https://github.com/osuresearch/ui/commit/ba48854ba2cf2df288da9fcba02c94a531c6b936))

# [5.0.0-alpha.1](https://github.com/osuresearch/ui/compare/v4.8.1...v5.0.0-alpha.1) (2022-12-21)


### Features

*  UI 5 rewrite 📝 ([f5f0f28](https://github.com/osuresearch/ui/commit/f5f0f28c60efbae7403e62cad9c86392263ed6d3))


### BREAKING CHANGES

* Overhaul of the entire framework for v5

- Switch from Styleguidist to Storybook for the design system reference
- Switch from Bootstrap to Tailwind for styling and colocated styles
- Switch to microbundle for bundling ESM/CJS/etc distributions
- Refactor the base of all components to introduce standardized style props
- Complete visual rework to align with the BUX design system
- Accessibility-first component development process

## [4.8.1](https://github.com/osuresearch/ui/compare/v4.8.0...v4.8.1) (2022-12-21)


### Bug Fixes

* **ci:** add missing publishConfig key ([44d19ea](https://github.com/osuresearch/ui/commit/44d19ea60a26f508cac102a35a0b85e1262666c0))

# [4.8.0](https://code.osu.edu/ORIS/ui/compare/4.7.1...4.8.0) (2022-12-20)


### Features

* add Upload form component ([f11c819](https://code.osu.edu/ORIS/ui/commit/f11c819dbc4aaf30ca933d4f6bae08f25ee252f3))

## [4.7.1](https://code.osu.edu/ORIS/ui/compare/4.7.0...4.7.1) (2022-10-25)


### Bug Fixes

* missing type information for DropOverlay.Menu props ([80707ce](https://code.osu.edu/ORIS/ui/commit/80707cef4a536c1c1fdd9b2028860f73b990fa30))

# [4.7.0](https://code.osu.edu/ORIS/ui/compare/4.6.1...4.7.0) (2022-10-25)


### Features

* add optional `className` prop to `DropOverlay.Menu` and `DropOverlay.Menu.Item` ([d2b1217](https://code.osu.edu/ORIS/ui/commit/d2b1217f72d4631632b66f7030fe8a800ca6b3fd))

## [4.6.1](https://code.osu.edu/ORIS/ui/compare/4.6.0...4.6.1) (2022-10-21)


### Bug Fixes

* **a11y:** `Text.Rich` no longer uses h1-h3 DOM elements to avoid conflicts with existing page layout (resolves [#17](https://code.osu.edu/ORIS/ui/issues/17)) ([c7aaf87](https://code.osu.edu/ORIS/ui/commit/c7aaf871ea3c8d3076f0ced6eac0568dec5c581e))
* division symbol deprecation warnings in sass files ([7364811](https://code.osu.edu/ORIS/ui/commit/73648114187677e1b5d4e79f72514e8a7f090301))

# [4.6.0](https://code.osu.edu/ORIS/ui/compare/4.5.1...4.6.0) (2022-10-13)


### Bug Fixes

* **a11y:** link themed buttons will now correctly show a focus ring (resolves [#20](https://code.osu.edu/ORIS/ui/issues/20)) ([0c2e9fa](https://code.osu.edu/ORIS/ui/commit/0c2e9fa888b7b6c22541311bbf52babf3b241390))
* ChangeParams and ChangeTargetOptions missing from exports (resolves [#8](https://code.osu.edu/ORIS/ui/issues/8)) ([67f62fc](https://code.osu.edu/ORIS/ui/commit/67f62fc7307d3e79a65673f80bbee37195a98c0f))
* invalid import paths to JsonObject ([5c5b52b](https://code.osu.edu/ORIS/ui/commit/5c5b52bbf63290806089fd6bb1b723265060f5be))


### Features

* add `Text.Autocomplete` component ([a531b03](https://code.osu.edu/ORIS/ui/commit/a531b03a0c46ba9d8f9957cc9a5b89907b66ee8a))
* add optional placeholder prop to `Lookup.Input` ([06dedd5](https://code.osu.edu/ORIS/ui/commit/06dedd5874b1ee9d4b11d9752b02b4083c803dbc))

## [4.5.1](https://code.osu.edu/ORIS/ui/compare/4.5.0...4.5.1) (2022-07-29)


### Bug Fixes

* LazyLoaded content now displays as soon as loading is complete without delay. Screen reader enhancements no longer affect visual display ([cc1de76](https://code.osu.edu/ORIS/ui/commit/cc1de76cecad7f11faa136ac2fb8d732f5279c34))

# [4.5.0](https://code.osu.edu/ORIS/ui/compare/4.4.11...4.5.0) (2022-07-26)


### Bug Fixes

* Added icons to invalid and valid form feedback text so they can pass WCAG 1.4.1 ([8763d2a](https://code.osu.edu/ORIS/ui/commit/8763d2a2a72c18d8884d763f9ef407dc8eb5cd25))
* Alert close button position style ([e4636f3](https://code.osu.edu/ORIS/ui/commit/e4636f380b8e46896e98ce29574c6c1d27ec7627))
* ARIA issue with Alert - allow users to choose the role, since role='alert' should be used sparingly and is rather inaccessible if not used properly. Keeping the default role as alert to prevent a breaking change. ([4873183](https://code.osu.edu/ORIS/ui/commit/48731839d65a3b929b750d9de0a9b1e4f1053ae6))
* Change default Alert role to status ([8441a69](https://code.osu.edu/ORIS/ui/commit/8441a698e5341d554115b9b3b2bd83964e533ab1))
* Correct documentation for adding accessible text to an `<Icon>` ([23e6c94](https://code.osu.edu/ORIS/ui/commit/23e6c94e156218c03a421942a44b8a2352ce9c16))
* dangerouslySetInnerHTML for Checkbox and Radio labels (resolves FWK-374) ([81814bf](https://code.osu.edu/ORIS/ui/commit/81814bf8003cd02d943fcc4a18d6cc5b56793586))
* Give `Navbar` a unique label (resolves FWK-401) ([bc3aae6](https://code.osu.edu/ORIS/ui/commit/bc3aae6ba0dc14c7d76dbcf753e877af3521a45c))
* Handle Dropdown.readOnly and MultiSelect.readOnly props (resolves FWK-378) ([eea9f50](https://code.osu.edu/ORIS/ui/commit/eea9f506f2e8152d9511125340866d0085fc9981))
* Increase contrast ratio between navigation item and NavBar (resolves FWK-399) ([e24ad8d](https://code.osu.edu/ORIS/ui/commit/e24ad8d090b6f6a3abf452315a99d4c71bd4230a))
* LazyLoaded display logic where toggling back to loading would not show the placeholder ([b814f9a](https://code.osu.edu/ORIS/ui/commit/b814f9a5f989e9706ad18b3cb23db71fbf8e322f))
* Properly handle onBlur for DateTime component (partially resolves FWK-379) ([974596e](https://code.osu.edu/ORIS/ui/commit/974596e12e852ee3c12821740f6e3ab48c1b2471))
* Remove experimental `AppSearch` and `DocumentReview` components ([6e39829](https://code.osu.edu/ORIS/ui/commit/6e398292ba03cfd747b1d59f37adbd720dcfadb8))
* Resolve CSS validation errors, excluding SVG false positive errors (resolves FWK-400) ([f730ff5](https://code.osu.edu/ORIS/ui/commit/f730ff580f6c1c4212ffe04fa027db2cd96c8ea3))
* Set document title to Page title prop every time that prop changes ([3d7aacb](https://code.osu.edu/ORIS/ui/commit/3d7aacbcf4b26822ecf78d3843eff6fe602779fa))
* Use state to control the visibility of Alerts, instead of the Bootstrap data-dismiss attribute (resolves FWK-383) ([3f3c9ed](https://code.osu.edu/ORIS/ui/commit/3f3c9edf310722dfa6c02ab60ad5ea5741b02010))


### Features

* Add `<Page>` component to improve application accessibility ([4fab2f8](https://code.osu.edu/ORIS/ui/commit/4fab2f8cd735dbaf0623977129ba3452b0e038dd))
* CheckboxSet component for Checkbox fieldsets ([2c22118](https://code.osu.edu/ORIS/ui/commit/2c2211858e4fac16eb33e08b14470d810ef5d2d3))
* LazyLoaded component for better lazy loaded content accessibility ([f2aa02b](https://code.osu.edu/ORIS/ui/commit/f2aa02b9a7f4cc1ec1ed52d25afd22ceb428a7ad))
* RadioSet component for Radios in fieldsets ([3c41d3e](https://code.osu.edu/ORIS/ui/commit/3c41d3eaf6288d650b41e65c97b8719e426850b7))

## [4.4.11](https://code.osu.edu/ORIS/ui/compare/4.4.10...4.4.11) (2022-04-13)


### Bug Fixes

* remove package-level exports of search drivers introduced in 4.4.10 ([c047162](https://code.osu.edu/ORIS/ui/commit/c0471625c4f0b0914c3dfb1b582310759ec82f81))

## [4.4.10](https://code.osu.edu/ORIS/ui/compare/4.4.9...4.4.10) (2022-04-13)


### Bug Fixes

* incorrect export of `SearchFilters` as a type (resolves FWK-384) ([418655e](https://code.osu.edu/ORIS/ui/commit/418655e0f15f4e0e4a947d3422d5a685a26be488))
* missing search drivers and interfaces to package export (resolves FWK-385) ([8ae10e9](https://code.osu.edu/ORIS/ui/commit/8ae10e9a8b8a19a2a2c1f13d0ca8a7b07f699968))

## [4.4.9](https://code.osu.edu/ORIS/ui/compare/4.4.8...4.4.9) (2022-03-22)


### Bug Fixes

* Add `name` and `id` props to Text.Rich component (resolves FWK-375 and FWK-377) ([d764f13](https://code.osu.edu/ORIS/ui/commit/d764f1341728412e1381259348fcbcdd74d47660))
* Show asterisk for required single checkboxes (resolves FWK-376) ([f856c5a](https://code.osu.edu/ORIS/ui/commit/f856c5a356a057789d56879248f55e957c3d0717))

## [4.4.8](https://code.osu.edu/ORIS/ui/compare/4.4.7...4.4.8) (2022-03-11)


### Bug Fixes

* Update type of children prop for `<FieldSet.Legend>` to ReactChild, allowing both JSX elements and strings ([9b808b8](https://code.osu.edu/ORIS/ui/commit/9b808b8f863caa82d4be6ec1b4abb6c6edff94fe))

## [4.4.7](https://code.osu.edu/ORIS/ui/compare/4.4.6...4.4.7) (2022-03-10)


### Bug Fixes

* className gnored on all top level form components (resolves FWK-373) ([5df45b4](https://code.osu.edu/ORIS/ui/commit/5df45b439e0985164219886dbffcb3899aa49988))
* FeldSet does not use `id` attribute (resolves FWK-365) ([1b68d26](https://code.osu.edu/ORIS/ui/commit/1b68d2610682a720c15cc91bb9f16055940c9d32))
* Labels do not support HTML content (resolves FWK-374) ([f670f9c](https://code.osu.edu/ORIS/ui/commit/f670f9c51e27167124a73a8cb0925f7bbd92bbc3))
* Update FieldSet to not require a `name` and to inherit the `id` as the `name` if no name is set (follows the pattern of the rest of the components) ([bb6ce81](https://code.osu.edu/ORIS/ui/commit/bb6ce81185acac6854ef026be1b1426415cf843a))

## [4.4.6](https://code.osu.edu/ORIS/ui/compare/4.4.5...4.4.6) (2022-01-21)


### Bug Fixes

* **styleguide:** add a .htaccess so deployed styleguides can be accessed from just the project root ([7b6c3f2](https://code.osu.edu/ORIS/ui/commit/7b6c3f25cbfb1e3f64d7cde72b84c99d78007f17))

# 4.4.5 (2021-07-06)

__Bug Fixes:__

* Fixes issue introduced in the previous release where `Lookup.Input` result could not be selected by mouse click.
* Input focus event now passed to `onBlur` callback on `Lookup.Input`.

# 4.4.4 (2021-06-29)

__Bug Fixes:__

* Improve results pane behavior on `Lookup.Input` component.

# 4.4.3 (2021-06-11)

__Bug Fixes:__

* `props.onChange()` is no longer invoked when `readOnly` is set to true in the `Checkbox.Input`, `Number.Input`, `Radio.Input`, `Text.Area`, `Text.Email`, `Text.Input`, and `Text.Rich` components.

# 4.4.2 (2021-05-13)

__Bug Fixes:__

* Data objects inlined for `MultiSelect`, `Dropdown`, `DataTable`, and `TreeTable` component examples (resolves FWK-308)
* Added error handling for `Paginator` component for when the search limit is set to a number less than one (1) (resolves FWK-309)
* Added missing keys to `Filters.Active` and `Filters.OneOf`
* Added optional `id` property to `Filter.Toggle` component (resolves FWK-296)

# 4.4.1 (2021-05-04)

Bumping version due to a version conflict on UCR's package repository

# 4.4.0 (2021-05-04)

__Deprecated Components:__

* `Modal` (superseded by PrimeReact `Dialog`)

__Breaking Changes:__

* Potential breaking changes in all PrimeReact components due to upgrade to version 6.3.0 (see [\#1738](https://github.com/primefaces/primereact/issues/1738), [\#1566](https://github.com/primefaces/primereact/issues/1566), and [\#1877](https://github.com/primefaces/primereact/issues/1877))
* `useSearchProvider` - Rename `results` to `response` and `setResults` to `setResponse` in the returned object

__New Features:__

* Added pagination support for Search components (`offset` and `limit` getters/setters in Search context).
* `Apollo` search driver updated to include pagination support.
* `SyncSearchWithURL` updated to include pagination support.
* Added `Paginator` component to be used within a `SearchProvider`.
* Added support for parameters in `JsonApi` Search driver.
* Added `Avatar` component with https://opic.osu.edu integration.
* Added `EmailLink` component.
* PrimeReact updated from version 5.0.0 to version 6.3.0.
    * New PrimeReact component support in ORIS/ui: `Dialog` (replaces Modal), `Toast` (via `useToast` hook and `ToastProvider`), and `Skeleton`.

__Bug Fixes:__

* The `DateTime.Input` calendar now displays above all DOM elements. This resolves an issue where the calendar would be cut off when used in a Modal or Dialog.
* The `DateTime.Input` field no longer ignores direct keyboard input.
* `SyncSearchWithURL` now conditionally checks that the initial URL actually has filters prior to replacing them in the Search provider.

# 4.3.2 (2021-03-01)

__Minor Backwards Breaking Changes:__

* Internal imports have changed to use the uppercase package name `@ORIS` instead of `@oris` to support NPM > 6. If you have the package installed as `@osuresearch/ui` you may encounter build errors. Reinstall as `@osuresearch/ui`.

# 4.3.1 (2021-02-19)

__Bug Fixes:__

* The Lookup form component can now be properly used as a controlled component. If the value passed into the `Lookup.Input` subcomponent is updated, the internal state will be updated to reflect the new value. An example for clearing `Lookup.Input` using this method was added to the README file for the `Lookup` component.
* Resolves FWK-279 - the Lookup.Input clear button no longer triggers form submission

# 4.3.0 (2021-01-11)

__New Features:__

* Integration of the [PrimeReact UI Library](https://www.primefaces.org/primereact/), with support for its `DataTable`, `TreeTable`, and `Accordion` components (support for additional PrimeReact components forthcoming)
* New `Alert` component based on [Bootstrap Alerts](https://getbootstrap.com/docs/4.0/components/alerts/)
* New `Chips` form component based on the PrimeReact component of the same name
* New `Dropdown` form component based on the PrimeReact component of the same name
* New `DropOverlay` component based on [Bootstrap Dropdowns](https://getbootstrap.com/docs/4.0/components/dropdowns/)
* New `MultiSelect` form component based on the PrimeReact component of the same name
* New search components `SearchProvider` and `Filters.*` to standardize search and filtering tools in apps (supports both GraphQL and JSON:API backends)
* New `Lookup` form component that uses the new search and filtering tools
* Navigation improvements to styleguide by categorizing components

__Internal changes:__

* The base styleguide page no longer loads all of the components in the styleguide
* Added the ability to override the component path line; if `componentPathLine` is set in a component, it will override the default (i.e. `import { Component } from '@osuresearch/ui'`)
* Improved the method of wrapping component names in brackets
* Moved component files into category folders within the components folder
* Removed (now) redundant HTML docs


# 4.2.5 (2020-12-29)

__New Features:__
* Adds support for installation through UCR's package repository


# 4.2.4 (2020-11-07)

__Accessibility Fixes:__
* Resolves color-contrast issues with link text (FWK-250) and theme colors (FWK-237)

# 4.2.3 (2020-10-25)

This version adds additional documentation for form components.

__Bug Fixes:__
* The `name` property of form field components inside of a `FieldSet` is no longer overridden by the `name` property in the `FieldSet` bind
* An `onBlur` callback was added to `Text.Rich` for RHF compatability
* Improved error state styles for `Text.Rich`
* Error and Success subcomponents will display when the parent `.ui-form-element` also has `.is-invalid` or `.is-valid` class, respectively (resolves FWK-251)

# 4.2.2 (2020-10-12)

__Accessibility Fixes:__

* The common Label component included an `aria-label` that denoted required fields. This was removed in favor of adding an `aria-required` attribute to form inputs/controls - the more semantic solution
* `aria-live` was removed from the Error component, since `role="alert"` automatically makes the component an assertive live region. Additionally, a recommendation to perform validation on blur was added to the Form component documentation. Validating on blur will allow for the alerts to perform properly, per [this article recommended by Jen](https://hiddedevries.nl/en/blog/2017-04-04-how-to-make-inline-error-messages-accessible) and testing in macOS VoiceOver.
* Added the `aria-invalid` attribute to form inputs/controls to aid in error validation for users of assistive technologies.

__Bug Fixes:__

* Fixed a minor display bug for help text and success/error messages in Chrome

# 4.2.1 (2020-09-30)

__Bug Fixes:__

* Removed outdated form components from the distribution folder that were causing some form subcomponents to crash

__Internal Changes:__

* Build process will now delete the dist folder prior to build

# 4.2.0 (2020-09-29)

__Deprecated Components:__

Components marked as deprecated will be removed in a future release. They will continue to work until their removal.

* `Richtext` has been deprecated in favor of `Text.Rich` in the new Form Components

__Minor Breaking Changes:__

* `Button` - Changed the default theme to `primary` (previously was `secondary`)

__New Features:__

* Introduces new Form Components (`Form`, `FieldSet`, `Checkbox`, `Text`, etc) to abstract away the complexities of setting up accessible forms.
* `Richtext` - Added `id` prop
* `Button` - Added `type` prop (one of `'button' | 'reset' | 'submit'` - defaults to `button`).
* `Button` - Added `to` prop. When specified, the button renders as a React Router `<Link>` to the designated route

__Bug Fixes:__

* Changed defaults for `$vendor-fonts` and `$vendor-images` to not use a local server copy of `/assets` and instead point to the production copy at `orapps.osu.edu`
* Fixed text underlines on badges that were wrapped within anchors
* `Navbar` - Removed `exact` from Link elements to fix compatibility with newer React Router versions
* `Search` - Fixed bug where Search inputs without `defaultValue` focus on load

__Internal Changes:__

* Fixed Styleguidst mangling component names during styleguide builds - preventing deployments
* Added support for deploying a build of the styleguide to the dev server

# 4.1.1 (2020-05-20)

Rebuilt ES5 distribution files that were not correctly built for the 4.1.0 release.


# 4.1.0 (2020-05-18)

__Deprecated Components:__

Components marked as deprecated will be removed in a future release. They will continue to work until their removal.

* `Profile` - Now part of the [@ORIS/auth](https://code.osu.edu/ORIS/auth/) package.
* `Emulate` - Now part of the [@ORIS/auth](https://code.osu.edu/ORIS/auth/) package.

__Minor Breaking Changes:__

* `Button` - Removed `small` prop. Use `className="btn-sm"` instead.
* `Icon` - Removed the use of `children` prop for screen reader labeling. Use `label` prop instead.
* `ModalHeader` - Changed default of `hasCloseButton` prop to `true`. Previous usage that assumed the close button would be hidden

__New Features:__

* New `Richtext` component based on CKEditor 4
* New `TabList` and `TabItem` components for a responsive list of many tabs
* `Button` - Added optional `className` and `disabled` props
* `Icon` - Added optional `label` prop for screen reader labels

__UI Changes:__

* `ExternalLink` - Made the icon less obtrusive
* `Footer` - Replaced webmaster contact with Accessibility Coordinator. For technical support contact, use the `Support` component.


# 4.0.1 (2020-01-15)

__Bug Fixes:__

* Refactored package dependencies to no longer require specific builds of node-sass or react-scripts installed when installing `@osuresearch/ui` through npm.
    * Minimum supported React versions are defined via `peerDependencies` to issue warnings during `npm install` if these are not met.

Note that with the above fix `react-dom` and `react-router-dom` will no longer be installed alongside `@osuresearch/ui`. If your project was using an older version of `@osuresearch/ui`, you will need to install these dependencies manually via:

```
npm install react-dom react-router-dom --save
```


# 4.0.0 (2019-11-18)

__New Styleguide and Interactive Examples System:__

Styleguide documentation has been integrated directly into the project via [React Styleguidist](https://react-styleguidist.js.org/). Simply `git checkout` a copy of oris/ui and do a `npm start` to start up a local interactive styleguide.

__Backwards Breaking Changes:__

* All non-React components have been removed or replaced with React-equivalents
    * This does not include every Bootstrap component. Use those as you typically would.
* Composer support has been removed. Now installable as a `npm` package
* Component imports must now come from the `@osuresearch/ui` package
* `Lookup` component has been replaced by `Search` - with similar arguments and less jQuery
* `Modal` component now has additional wrapper DOM. Recommended to use new `ModalHeader` and `ModalBody` as the only children.
* Removed `AppLoader` component
* Removed `AppError` component
* Removed `ShibbolethMonitor` component - see [FWK-185](https://ordevsvc01.rf.ohio-state.edu/youtrack/issue/FWK-185) for a future replacement
* Removed `Util.debounce` function

__New Features:__

* New `ExternalLink` component to automatically handle accessibility and security standards for links out of an application.
* New `Icon` component to automatically handle accessibility standards for Font Awesome icons.
* New `Search` component to replace legacy `$.Lookup`
    * No longer jQuery-based
    * Has multiple new props for configuration
* New `Footer` component to display the standard brand footer
* New `OhioStateNavbar` component to encapsulate the required OSU brand navbar
* New `PersonSearchResult` renderer component for `Search` to standardize how person results look across applications.
* New `Button` component
* New `Badge` component
* New `ModalHeader` component
* New `ModalBody` component

__Accessibility Improvements:__

* Links now have an underline by default
* `Search` "Clear" button has been changed to an X that is now always persistent as long as there is text in the input.


# 3.3.1 (2019-10-10)

__Bug Fixes:__
* Multiple React components: Fixed `fetch` compatibility issues with Edge < 18


# 3.3.0 (2019-05-14)

__New Features:__
* Add new React components for common ORIS application features (Emulate, AppLoader, AppError, Lookup, Modal, Profile, Navbar, SystemAlert, ShibbolethMonitor)
* Add `i.required-asterisk` component style to render out the red asterisk used on required fields in any context that a designer wants (e.g. for individual checkbox labels or a form heading)

__Bug Fixes:__
* Lookup: Fix component not updating `$.Lookup` when `value, valueKey` props mutate
* DataTables: Fix _empty container class always inheriting underlying `.even, .odd` styles
* Fix extra margins added for adjacent inputs in a group

__UI Changes:__
* DataTables: Swapped what row is "darkened" for a `.stripe` table to improve the look of paginated tables with an even number of records per page
* Added Capita as an available font - with Times New Roman fallback
* Change `h1, h2` headings to scarlet Capita
* Add a slight additional margin between navbar links to reduce crowding
* Slightly adjust the grey of `.navbar` tabs to better support embedding into modals


# 3.2.1 (2018-03-13)

__Bug Fixes:__
* Emulate: Fixed incorrect property call to Lookup


# 3.2.0 (2018-03-13)

__New Features:__
* Uploader: Added user confirmation prior to sending a request to delete a file
* Uploader: Added `dataField` option (default: `filedata`) to support changing the target for `$_FILES`
* Uploader: Added the ability to specify per-file metadata (submitted to delete/download endpoints as `file-metadata`)

__Bug Fixes:__
* Removed specificity for `form-group.is-required` label star suffixes - fails for cases where labels are inside a BS4 rowset
* Fixed `.form-group` margins for the case when the `.form-group` is combined with a `.col-*` class (margins failed to collapse due to additional padding)
* Fixed edge case of incorrect margins for a `.form-group` that is defined as a `fieldset` (fieldsets do *not* allow margin collapse)
* Update gulp-sass dependency to `^3` due to 404 errors being thrown for the old `^2` branch's dependencies
* Component: Fixed a missing ifelse causing all function calls to be treated as property getters
* Uploader: Fixed static method call for item template DOM
* Uploader: Improved error handling and error states
* Uploader: Moved request body payload to query parameters for DELETE requests to support certain webservers ignoring the body of a DELETE request
* Uploader: Fixed event listeners handling events in the same call stack as the Uploader plugin
* Uploader: Fixed various edge cases causing `isEmpty` to incorrectly return false

__UI Changes:__
* Rounded badges to make them look less like buttons
* Changed DataTables pagination controls to look/behave like Bootstrap 4
* Removed some redundant (noisy) borders from tables/DataTables
* Defaulting DataTables to a non-paging simple table-only view. Additional features are to be turned on at developer’s discretion
* Uploader: Changed default file info to `Complete` for previously uploaded files without a custom `info` field

__Internal Changes:__
* Uploader: Defaulting `download` option to false
* Uploader: Cleaned up SASS


# 3.1.1 (2018-02-13)

__Bug Fixes__:
* Lookup: Fixed support for array notation in lookup input names. `name="foo[arr]"` will require a sibling input with `name="foo-key[arr]"`
* Lookup: Fixed incorrect variable reference for `keyValue` method


# 3.1.0 (2018-02-07)

__Backwards Breaking Changes:__
* Lookup: Changed `store` option to `key` to better reflect its purpose
* Lookup: Will no longer move the `name` attribute from the Lookup input to the hidden "key" input. This changes how data is POSTed alongside forms, as you will no longer get the hidden key value but instead the original display text of the input for the named field. Key value will now be stored and submitted via an input named the same as the original lookup input, but with the suffix `-key`.

__Bug Fixes:__
* Fixed Lookup incorrectly forcing focus to the input when `set()` or `clear()` methods are called via Javascript
* Fixed Lookup not automatically setting itself to `readonly` if prepopulated with a value
* Fixed margins for checks/radios inside a `.form-check-inline` group

__Implemented Enhancements:__
* Lookup: Now supports using a pre-populated "key" input on initial DOM load. The input MUST be a sibling to the lookup input and named the same plus the suffix `-key`. E.g. for `<input data-provide="lookup" name="foo" ...>` there would be an `<input name="foo-key" ...>` sibling. If one could not be found, a hidden input will be created automatically that meets the requirements.
* Added kebabcase synonym for all frontend components registered in the jQuery prototype. E.g. `$.fn.CoolTool` is also now registered as `$.fn['cool-tool']`
* Added rule to throw an error if a component name overrides an existing entry in jQuery's prototype


# 3.0.1 (2018-02-01)
There's Always Something Edition

__Bug Fixes:__
* Fixed class names for Emulate component DOM template (changed for BS4 Release)
* Fixed checkboxes for Feedback component DOM template (changed for BS4 Release)
* Fixed Lookup setting a `display: block` on the clear button - causing adjacent buttons to be misaligned


## 3.0.0 (2018-01-23)
Upgrade to Bootstrap 4.0.0 Release and to ES6 for Javascript components

This upgrade requires changes to the `gulpfile.js` in ES5 applications (any application doing an upgrade from oris/ui 2.0 to 3.0),
changes to the version of Bootstrap included from Assets, and contains a number of backwards breaking changes
between Bootstrap 4 Beta 2 and Release.

See the [migration guide on the OR Wiki](https://orwiki.osu.edu/xwiki/wiki/oris/view/Development/Guides/Migrations/UI%202.0%20to%203.0/)

__Backwards Breaking Changes:__
* Upgrade to Bootstrap 4.0.0 Release
* Rewrite of Javascript components to ES6
* Rename `scss` directory to `sass` to be consistent with the applications
* `navbar-nav` will now be hidden on displays `<= sm` with the expectation that a `tabbar` will be visible for navigation.
* Removed unused Bootstrap 3 + Symfony Forms templates

__Fixed Bugs:__
* Fixed responsive navbar rules for when a `form-inline` is adjacent to a `profile`
* Fixed alignment of icons for inputs included in a navbar's `form-inline`
* Fixed outline buttons looking too similar to disabled buttons
* Fixed `header.is-sticky` not supporting variable height headers (e.g. when extra message banners are visible)
* Fixed cursor to be a pointer for default button styles
* Fixed z-indexes for custom components going higher than Bootstrap components (e.g. navbar being rendered over modals)

__Implemented Enhancements:__
* Added `src/dist/ui.es5.js` full backwards compatible build for ES5 applications
* Added new `ApplicationAlert` component for displaying important server-wide notice banners on applications
* Added new `Profile` component and DOM template (src/twig/profile.html)
* Added new `Support` component and DOM template (src/twig/support.html)
* Added new `Emulate` component and DOM template (src/twig/emulate.html)
* Added `Util` function group, and a general purpose `Util.debounce` function for frequent event handlers
* Lookup: Added `set(display, store)` method
* Lookup: Added getters `displayValue` and `storeValue`


## 2.0.0 (2017-10-25)
Upgrade for Bootstrap 4 Beta.2

There are a handful of breaking changes between BS4 Alpha to BS4 Beta. Be sure to thoroughly read the two ship lists:
* [Bootstrap 4 Beta 1 Ship List](https://github.com/twbs/bootstrap/issues/21568)
* [Bootstrap 4 Beta 2 Ship List](https://github.com/twbs/bootstrap/issues/23278)

The following changelog only applies to ORIS components or adjustments made on top of Bootstrap 4.

__Backwards Breaking Changes:__
* Replaced `$.Lookup` with a new 2.0. See the Styleguide for new usage documentation.
* Now requires jQuery 3+
* Removed `tether.js` vendor library
* `.is-error`/`.error` form validation classes removed. Now uses BS4's validation structure (see official docs)
* Replaced `.navbar-thick` with `.navbar-main` to better consolidate a number of required classes into one
* `.navbar-expand` has been merged directly into `.navbar` so all navbars are horizontal flex by default
* Removed `.z-depth-*` classes
* Removed `@mixin vertical-align`
* Complete rewrite of the OSU Brand Header. See Styleguide for new DOM structure.

__Fixed Bugs:__
* Fixed icons not displaying for mobile in the OSU Brand Header
* Fixed default render theme for components when a developer forgets to add a theme class

__Implemented Enhancements:__
* Added new `tabbar` component
* Added new `uploader` component
* Added new `richtext` component
* Added extended color palette for SASS
* No longer using an absolutely positioned/absolute height footer
* Added `.is-horizontal-scroll` for the body element to make a horizontally scrollable body with fixed headers


## 1.1.0 (2017-10-25)
Upgrade for Bootstrap 4 alpha.6

__Backwards Breaking Changes:__
* All layout components (`.nav`, `.row`, etc) are now 100% based on [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* `.nav-stacked` changed to `flex-column`
* `.container` changed to `.wrapper` for the OSU Navbar component
* `col-xs` breakpoints have been removed. Use `col-` for default non-responsive layout behavior. Example: `col-xs-12` is now just `col-12`

__Fixed Bugs:__
* Fixed color contrast between enabled and disabled dates in the Datepicker component
* Fixed brand font-face not being applied to control elements
* Fix margin for custom control groups

__Implemented Enhancements:__
* All Javascript has been refactored to follow the [AirBNB ES5 styleguide](https://github.com/airbnb/javascript/tree/es5-deprecated)
* Lookup component has been implemented with real AJAX requests
* Prefix `.input-group-addon` icons are now embedded within adjacent inputs (previously was presented as a button)
* Simplified `.table` display
* Changed sm breakpoint to 500px to force col-sm-* support for Chrome 57+ printing


## 1.0.0 (2017-02-07)
Initial stable release based on Bootstrap 4 alpha.4
