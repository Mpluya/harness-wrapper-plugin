import React from 'react';
import { EntityLayout } from '@backstage/plugin-catalog';
import {
    isHarnessCiCdAvailable,
    EntityHarnessCiCdContent,
} from '@harnessio/backstage-plugin-ci-cd';
import {
    AppPluginInterface,
    SurfaceStoreInterface,
    EntityPageSurface,
} from '@vmware-tanzu/core-frontend';

export const HarnessCiCdFrontendPlugin: AppPluginInterface =
    () => (context: SurfaceStoreInterface) => {
        context.applyTo(
            EntityPageSurface,
            (entityPageSurface) => {
                entityPageSurface.servicePage.addTab(
                    <EntityLayout.Route path="/harness-ci-cd" title="Harness CI/CD" if={isHarnessCiCdAvailable}>
                        <EntityHarnessCiCdContent />
                    </EntityLayout.Route>,
                );
            },
        );
    };